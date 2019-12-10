---
layout: posts
---

### Python Install

Debian/Ubuntu install these packages using the following commands:

```
sudo apt update
sudo apt install python3 python3-dev python3-venv
```

You also need to install pip. While Debian and most other distributions include a python-pip package, we recommend that you install pip yourself to get the latest version:

```
wget https://bootstrap.pypa.io/get-pip.py
sudo python get-pip.py
```

After the installations are complete, verify that you have pip installed:

```pip --version```

### Using venv to isolate dependencies

venv is a tool that creates isolated Python environments. These isolated environments can have separate versions of Python packages, which allows you to isolate one project's dependencies from the dependencies of other projects. We recommend that you always use a per-project virtual environment when developing locally with Python.

Use the venv command to create a virtual copy of the entire Python installation. This tutorial creates a virtual copy in a folder named venv, but you can specify any name for the folder.

```
cd your-project
python3 -m venv venv
```
    
Set your shell to use the venv paths for Python by activating the virtual environment.

```source venv/bin/activate```

If you want to stop using the virtual environment and go back to your global Python, you can deactivate it:

```deactivate```

### PIP

Now you can install packages without affecting other projects or your global Python installation:

```pip install pika redis```

Now you have installed some packages using pip you can freeze your pip into a requirements file

```pip freeze > requirements.txt```

Now from another environment you can install them by,

```pip install -r requirements.txt```
