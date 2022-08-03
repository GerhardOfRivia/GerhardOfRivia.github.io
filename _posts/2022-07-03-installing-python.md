---
layout: posts
excerpt: Installing python from a tar
---

# Install development packages required to build Python.

## On Debian:

```sh
sudo apt update
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev libbz2-dev curl
```

## On Fedora:

```sh
sudo dnf groupinstall development
```

# Download the stable latest release of Python 3

Visit the official [Python](https://www.python.org/downloads/) website and download the latest version of Python 3. After the download is complete, you should have a .tar.xz archive file (a "tarball") containing the source code of Python.

# Extract the tarball

Once the download is complete, extract the tarball by either using the extractor application of your choice or the Linux tar command, for example:

```sh
tar -xf Python-3.?.?.tar.xz
```

# Configure the script

Once the Python tarball has been extracted, navigate to the configure script and execute it in your Linux terminal with:

```sh
cd Python-3.?.?
./configure
```

The configuration may take some time. Wait until it is successfully finishes before proceeding.

# Start the build process

If you already have a version of Python installed on your system and you want to install the new version alongside it, use this command:

```sh
sudo make altinstall
```

The build process may take some time.

# Check your version

```sh
ls /usr/local/bin/python3*
python3.? --version
```

# Notes

> Note: If you have an error say with pip connecting to ssl check step 1 and make sure you installed the required development packages.
