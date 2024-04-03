import os
import sys
import shutil

def CMD_NewProject():
    """
    cmd:
        pyscreeps-arena [project_path]

    * 复制"src" "game" "build.py" 到指定目录

    Returns:

    """
    if len(sys.argv) < 2:
        print("Usage: pyarena new [project_path]")
        return
    project_path = sys.argv[1]
    if not os.path.exists(project_path):
        os.makedirs(project_path)
    this_path = os.path.dirname(os.path.abspath(__file__))
    shutil.copytree(os.path.join(this_path, "src"), os.path.join(project_path, "src"))
    shutil.copytree(os.path.join(this_path, "game"), os.path.join(project_path, "game"))
    shutil.copy(os.path.join(this_path, "build.py"), os.path.join(project_path, "build.py"))
    print("Project created at", project_path)


