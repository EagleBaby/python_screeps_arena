import os
import re
import sys
import shutil
import subprocess
import pyperclip
from colorama import Fore


class Compiler:
    libs = ["game"]
    FILE_STRONG_REPLACE = {
        "std": {
            "==": "===",
            "!=": "!==",
        }
    }

    PYFILE_WARNING_CHECK = {
        r"\.\s*get\s*\(": "Please use 'dict.py_get'. (add '# ignore;' same line to ignore it).",
        r"\.\s*clear\s*\(": "Please use 'container.py_clear'. (add '# ignore;' same line to ignore it).",
        r"\[\s*-\s*1\s*\]": "Index by '[-1]' may not work in js. (add '# ignore;' same line to ignore it).",
    }

    JS_VM = "org.transcrypt.__runtime__.js"

    GAME_UTILS = './game.utils.js'
    GAME_PROTO = './game.proto.js'
    GAME_CONST = './game.const.js'

    SYSTEM_MODULES_IGNORE = {
        GAME_UTILS: ['CircleVisualStyle', 'Color', 'CostMatrix', 'CreateConstructionSiteResult', 'Direction', 'DoesZapCodeSpaceFlag', 'FindPathOptions', 'Goal', 'HeapInfo',
                     'LineStyle', 'LineVisualStyle', 'PolyVisualStyle', 'RectVisualStyle', 'SearchPathOptions', 'SearchPathResult', 'Terrain', 'TextAlign', 'TextVisualStyle',
                     'Visual', 'getAt', 'searchPath'],
        GAME_PROTO: ['BodyPartType', 'CreepAttackResult', 'CreepBuildResult', 'CreepDropResult', 'CreepHarvestResult', 'CreepHealResult', 'CreepMoveResult', 'CreepPickupResult',
                     'CreepPullResult', 'CreepRangedAttackResult', 'CreepRangedHealResult', 'CreepRangedMassAttackResult', 'CreepTransferResult', 'CreepWithdrawResult',
                     'ResourceType', 'SpawnCreepResult', 'Store', 'TowerAttackResult', 'TowerHealResult', 'Spawning', 'ScoreController', 'Flag'],
        GAME_CONST: ['RESOURCE_SCORE'],
    }
    SYSTEM_MODULES_TRANSNAME = {
        GAME_UTILS: "game/utils",
        GAME_PROTO: "game/prototypes",
        GAME_CONST: "game/constants",
    }
    GENERATE_IGNORE_PYFILES = ['config.py']  # Won't be compiled into the final js code, only for defines.

    JS_IMPORT_PAT = re.compile(r'from\s+[\'\"]([^\']+)[\'\"]')
    INSERT_PAT = re.compile(r'#\s*insert\s+([^\n]*)')  # 因为被判定的string为单line，所以不需要考虑多行的情况

    TRANSCRYPT_ERROR_REPLACE = {
        # 由于transcrypt的问题，导致编译后的js代码中存在一些错误，需要进行替换
        r"new\s+set\s*\(": r"set(",
    }

    def __init__(self, src_dir, build_dir):
        # check
        if not os.path.exists(src_dir):
            print(Fore.RED + '[Error] ' + Fore.RESET + 'src dir not exists')
            sys.exit(1)

        self.src_dir = os.path.abspath(src_dir)
        self.build_dir = os.path.abspath(build_dir)
        self.target_dir = os.path.join(self.build_dir, '__target__')

    @staticmethod
    def auto_read(fpath):
        """
        自动用多种编码读取文件

        Args:
            fpath:

        Returns:

        """
        try:
            with open(fpath, 'r', encoding='utf-8') as f:
                return f.read()
        except UnicodeDecodeError:
            with open(fpath, 'r', encoding='gbk') as f:
                return f.read()


    def copy_to(self):
        # copy to build dir
        print(Fore.YELLOW + '>>> ' + Fore.RESET + ' copying to build dir: %s ...' % self.build_dir, end='')
        if os.path.exists(self.build_dir):
            shutil.rmtree(self.build_dir)
        shutil.copytree(self.src_dir, self.build_dir)
        # add libs
        for lib in self.libs:
            shutil.copytree(lib, os.path.join(self.build_dir, lib))

        # overwrite last to [Done]
        print(Fore.GREEN + '\r[1/6][Done]' + Fore.RESET + ' copying to build dir: %s' % self.build_dir)

    @property
    def target_py(self):
        return os.path.join(self.build_dir, 'main.py')

    @property
    def target_js(self):
        return os.path.join(self.target_dir, 'main.js')

    @staticmethod
    def preprocess_if_block(source_code, variables):
        lines = source_code.split('\n')
        stack = []
        result = []

        for i, line in enumerate(lines):
            striped = line.strip()
            if_match = re.match(r'#\s*if\s+([^:]*)$', striped)
            elif_match = re.match(r'#\s*elif\s+([^:]*)$', striped)
            else_match = re.match(r'#\s*else$', striped)
            endif_match = re.match(r'#\s*endif$', striped)

            if if_match:
                condition = if_match.group(1)
                stack.append(eval(condition, variables))
            elif elif_match and len(stack) > 0:
                condition = elif_match.group(1)
                stack[-1] = eval(condition, variables)
            elif else_match and len(stack) > 0:
                stack[-1] = not stack[-1]
            elif endif_match:
                stack.pop()
            else:
                if len(stack) == 0 or all(stack):
                    result.append(line)

        return '\n'.join(result)

    @staticmethod
    def pyfile_warn_check(fpath):
        """
        检查某个py文件内是否有警告

        如果有的话，输出[Warn][{file_name}/{line_io}]{detail}

        Returns:

        """
        content = Compiler.auto_read(fpath)
        for pat, detail in Compiler.PYFILE_WARNING_CHECK.items():
            for i, line in enumerate(content.split('\n')):
                m = re.search(pat, line)
                if m:
                    # 检查m前面同一行内是否有#，如果有则忽略
                    comment = re.search(r'#', line[:m.start()])

                    # 检查m后面同一行内是否有#\s*ignore;，如果有则忽略
                    ignore = re.search(r'#\s*ignore\s*;', line[m.end():])

                    if not comment and not ignore:
                        print(Fore.YELLOW + f'[Warn]' + Fore.RESET + f'[{os.path.basename(fpath)}/line:{i + 1}]: {detail}')



    def pre_compile(self):
        self.copy_to()

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'preprocessing ...', end='')
        py_fpath = []
        for root, dirs, files in os.walk(self.build_dir):
            for file in files:
                if file.endswith('.py'):
                    py_fpath.append(os.path.join(root, file))
                    self.pyfile_warn_check(py_fpath[-1])


        _pre_sort_ = {}  # sort
        _pre_define_ = {}  # define
        _js_replace_, _insert_id_ = {}, 0  # insert

        # ------------------------------------ SORT ------------------------------------ #
        # 获取所有.py文件中的所有# sort的内容，并记录下来(不存在则默认为65535)
        for fpath in py_fpath:
            fname = os.path.basename(fpath)[:-3] + '.js'
            content = self.auto_read(fpath)
            m = re.search(r'#\s*sort\s+(\d+)', content)
            if m:
                try:
                    sort_num = int(m.group(1))
                except ValueError:
                    print(Fore.YELLOW + '[Warn] ' + Fore.RESET + f'sort number error: "{m.group(1)}", use 65535 instead.')
                    sort_num = 65535
                _pre_sort_[fname] = sort_num
            else:
                _pre_sort_[fname] = 65535

        # ------------------------------------ DEFINE ------------------------------------ #
        # 扫描所有# define的内容，然后在.py中移除这些行，并记录下来
        for fpath in py_fpath:
            content = self.auto_read(fpath)
            new_content = ""
            for line in content.split('\n'):
                # re.compile(r'#\s*define\s+([^\s]+)\s+([^\n]*)')
                m = re.search(r'#\s*define\s+([^\s]+)\s+([^\n]*)', line)
                if m:
                    _pre_define_[m.group(1)] = m.group(2)
                    new_content += '\n'
                else:
                    new_content += line + '\n'

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)

        # 按照keys的顺序，先用前面的key对应的内容去依次替换后面的key对应的value中
        _def_keys = list(_pre_define_.keys())
        _keys_len = len(_def_keys)
        for i in range(_keys_len - 1):
            for j in range(i + 1, _keys_len):
                _pre_define_[_def_keys[j]] = _pre_define_[_def_keys[j]].replace(_def_keys[i], _pre_define_[_def_keys[i]])

        # ------------------------------------ DEFINE:REPLACE ------------------------------------ #
        # 将刚才记录的define替换到.py中(注意优先替换更长的串)(因此先排序)
        _def_keys.sort(key=lambda x: len(x), reverse=True)
        for fpath in py_fpath:
            content = self.auto_read(fpath)

            for key in _def_keys:
                content = re.sub(r'[^_A-Za-z0-9]' + key, self._kfc_wrapper(_pre_define_[key]), content)

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)

        # ------------------------------------ IF BLOCK ------------------------------------ #
        for fpath in py_fpath:
            content = self.auto_read(fpath)

            content = self.preprocess_if_block(content, _pre_define_)

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)

        # ------------------------------------ INSERT ------------------------------------ #
        # 扫描所有# insert的内容，然后在.py中将整行替换为# __pragma__("js", __JS_INSERT_{id})
        for fpath in py_fpath:
            content = self.auto_read(fpath)
            new_content = ""
            for line in content.split('\n'):
                # re.compile(r'#\s*insert\s*([^\n]*)')
                # '# insert if(obj && obj.body) for(var p of obj.body) if (p.type == MOVE) return true;'
                m = re.search(self.INSERT_PAT, line)
                if m:
                    _sign_index_ = line.find('#')  # 必然存在
                    _js_key_ = f"__JS_INSERT_{_insert_id_:08d}"
                    _js_replace_[_js_key_] = m.group(1)

                    new_content += line[:_sign_index_] + f'# __pragma__("js", "{_js_key_}")\n'
                    _insert_id_ += 1
                else:
                    new_content += line + '\n'

            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)

        print(Fore.GREEN + '\r[2/6][Done] ' + Fore.RESET + 'preprocess finish.')

        return _pre_sort_, _pre_define_, _js_replace_

    def clear_not_generate_pyfile(self):
        """
        清空不需要编译的py文件
        :return:
        """
        for root, dirs, files in os.walk(self.build_dir):
            for file in files:
                if file.endswith('.py') and file in self.GENERATE_IGNORE_PYFILES:
                    with open(os.path.join(root, file), 'w', encoding='utf-8') as f:
                        f.write('')

    def transcrypt_cmd(self):
        # 执行cmd命令: transcrypt -b -m -n -s -e 6 target
        # 并获取cmd得到的输出
        cmd = 'transcrypt -b -m -n -s -e 6 %s' % self.target_py
        print(Fore.YELLOW + '>>> ' + Fore.RESET + f'"{cmd}" compiling ...', end='')
        p = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
        stdout, stderr = p.communicate()
        if 'Error while compiling' in stdout.decode():
            print('\r' + stdout.decode())
            print(Fore.RED + '[Error] ' + Fore.RESET + 'transcrypt compile error')
            sys.exit(1)
        print('\r' + Fore.GREEN + '[3/6][Done] ' + Fore.RESET + f'"{cmd}" Ready.')

    @staticmethod
    def _keep_lbracket(matched) -> str:
        """
        如果第一个字符是{, 则返回'{'，否则返回''
        :param matched:  pat:rf'\s{ignore},?'的匹配结果
        :return:
        """
        return '{' if matched.group(0)[0] == '{' else ''

    @staticmethod
    def _keep_first_char(matched) -> str:
        """
        保留第一个字符
        :param matched:
        :return:
        """
        return matched.group(0)[0]

    @staticmethod
    def _kfc_wrapper(replace):
        """
        保留第一个字符
        :param replace:
        :return:
        """

        def _kfc(matched) -> str:
            return matched.group(0)[0] + replace

        return _kfc

    def analyze_rebuild_main_js(self, defs):
        """
        分析main.js中导入的模块名称和先后顺序, 并重新生成main.js
        * 主要移除非SYSTEM_MODULES_IGNORE中的模块导入语句
        :param defs: dict{define: value}
        :return: imports : str, modules (names: str)
        """

        # create undefined
        imports = f'var Flag = undefined;\nvar ScoreController = undefined;\nvar RESOURCE_SCORE = undefined;\n\n'

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'analyzing and rebuilding main.js ...', end='')

        content = self.auto_read(self.target_js)
        modules, new_content = [], ""
        for line in content.split('\n'):
            m = re.search(self.JS_IMPORT_PAT, line)
            if not m:
                new_content += line + '\n'
                continue
            # remove ignore if in SYSTEM_MODULES_IGNORE
            module = m.group(1)
            for ignore in self.SYSTEM_MODULES_IGNORE.get(module, []):
                line = re.sub(r'[\s{]' + ignore + ',?', self._keep_lbracket, line)

            # do not add in modules if in system_modules_ignores
            if module in self.SYSTEM_MODULES_IGNORE:
                if module in self.SYSTEM_MODULES_TRANSNAME:
                    line = line.replace(module, self.SYSTEM_MODULES_TRANSNAME[module])  # 调整为js中的名称
                imports += line + '\n'
                continue
            if module not in modules:
                modules.append(module)

        # save raw main.js
        with open(self.target_js[:-3] + ".raw.js", 'w', encoding='utf-8') as f:
            f.write(content)

        # write rebuild main.js
        with open(self.target_js, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(Fore.GREEN + '\r[4/6][Done] ' + Fore.RESET + 'analyze and rebuild main.js successfully.')

        return imports, modules

    @staticmethod
    def remove_js_import(raw) -> str:
        """
        移除js中的import行
        :param raw:
        :return:
        """
        return re.sub(r'import[^\n]*\n', '', raw)

    def generate_total_js(self, usr_modules, f_sorts, f_replaces, g_replaces) -> str:
        """
        生成总的main.js
        按照如下顺序组合:
            ./org.transcrypt.__runtime__.js
            ./game.const.js  # IGNORE
            ./game.proto.js  # IGNORE
            ./game.utils.js  # IGNORE
            {usr_modules}
        :param usr_modules: list[str]  # js vm + 用户自定义模块
        :param f_sorts: dict{module_name: sort_priority}
        :param f_replaces: dict{module_name: dict{old: new}}
        :param g_replaces: dict{old: new}
        :return: str
        """
        total_js = ""

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'generating total main.js ...', end='')

        # resort modules
        f_sorts[self.JS_VM] = -1
        for i in range(len(usr_modules)):
            for j in range(i + 1, len(usr_modules)):
                if f_sorts[usr_modules[i][2:]] > f_sorts[usr_modules[j][2:]]:
                    usr_modules[i], usr_modules[j] = usr_modules[j], usr_modules[i]


        # write modules
        for module in usr_modules:
            content = self.auto_read(os.path.join(self.target_dir, module))
            content = self.remove_js_import(content)
            for old, new in f_replaces.get(module, {}).items():
                content = re.sub(old, new, content)
            for old, new in self.TRANSCRYPT_ERROR_REPLACE.items():
                content = re.sub(old, new, content)
            total_js += f"\n// -------------------------------------------------------------------------------- Module:{module} "
            total_js += "--------------------------------------------------------------------------------\n\n"
            total_js += content + '\n'

        # write main.js
        content = self.auto_read(self.target_js)
        for old, new in self.TRANSCRYPT_ERROR_REPLACE.items():
            content = re.sub(old, new, content)
        total_js += content

        # global replace
        for old, new in g_replaces.items():
            total_js = re.sub(old, new, total_js)

        print(Fore.GREEN + '\r[5/6][Done] ' + Fore.RESET + 'generate total main.js successfully.')

        return total_js

    def compile(self, export_to=None, paste=False):
        """
        编译
        :param export_to: 指定main.mjs的输出路径(/main.mjs)
        :param paste: 是否复制到剪贴板
        :return:
        """
        sorts, defs, reps = self.pre_compile()
        self.clear_not_generate_pyfile()  # 清空不需要编译的py文件(请确保在pre_compile之后)
        self.transcrypt_cmd()
        imports, modules = self.analyze_rebuild_main_js(defs)
        total_js = imports + "\n" + self.generate_total_js(modules, sorts, self.FILE_STRONG_REPLACE, reps)

        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'exporting total main.js ...', end='')

        # ensure exported main.mjs path
        build_main_mjs = os.path.join(self.build_dir, 'main.mjs')

        if not export_to:
            # 尝试读取defs
            mjs_path = defs.get('MAIN_JS_PATH', build_main_mjs)
        else:
            mjs_path = export_to

        if not mjs_path.endswith('js'):
            mjs_path = os.path.join(mjs_path, 'main.mjs')

        # write main.mjs
        with open(build_main_mjs, 'w', encoding='utf-8') as f:
            f.write(total_js)

        # export main.mjs
        with open(mjs_path, 'w', encoding='utf-8') as f:
            f.write(total_js)

        print(Fore.GREEN + '\r[6/6][Done] ' + Fore.RESET + 'export total main.js successfully.')

        if mjs_path != build_main_mjs:
            print(Fore.LIGHTBLUE_EX + '[Info] ' + Fore.RESET + f'usr export to {mjs_path}')


        # copy to clipboard
        if paste:
            pyperclip.copy(total_js)
            print(Fore.GREEN + '[Done] ' + Fore.RESET + 'copy to clipboard')

    def clean(self):
        """
        清除build目录下除了main.mjs之外的所有文件和目录
        * 先复制main.mjs到src目录下，然后删除build目录，再将main.mjs剪切回build目录
        :return:
        """
        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'clean build dir ...', end='')
        if not os.path.exists(self.build_dir):
            print(Fore.RED + '\r[Error] ' + Fore.RESET + 'build dir not exists')
            return

        if not os.path.exists(os.path.join(self.build_dir, 'main.mjs')):
            print(Fore.RED + '\r[Error] ' + Fore.RESET + 'main.mjs not exists')
            return

        # copy main.mjs to src
        shutil.copy(os.path.join(self.build_dir, 'main.mjs'), os.path.join(self.src_dir, 'main.mjs'))

        # remove build dir
        shutil.rmtree(self.build_dir)

        # create build dir
        os.makedirs(self.build_dir)

        # move main.mjs to build dir
        shutil.move(os.path.join(self.src_dir, 'main.mjs'), os.path.join(self.build_dir, 'main.mjs'))

        print(Fore.GREEN + '\r[Done] ' + Fore.RESET + 'clean build dir')

    def clear(self):
        """
        清除build目录下所有文件和目录
        :return:
        """
        print(Fore.YELLOW + '>>> ' + Fore.RESET + 'clear build dir ...', end='')
        if not os.path.exists(self.build_dir):
            print(Fore.RED + '\r[Error] ' + Fore.RESET + 'build dir not exists')
            return

        shutil.rmtree(self.build_dir)
        os.makedirs(self.build_dir)

        print(Fore.GREEN + '\r[Done] ' + Fore.RESET + 'clear build dir')


if __name__ == '__main__':
    compiler = Compiler('src', 'build')

    compiler.compile()
    compiler.clean()

