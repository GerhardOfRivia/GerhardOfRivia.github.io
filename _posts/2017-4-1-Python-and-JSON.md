---
layout: posts
---

**Environment**

Before you start with encoding and decoding JSON using Python, you need to install any of the JSON modules available. Built in to a mass majority of python releases. 

```python
$ python3
Python 3.5.2 (default, Nov 17 2016, 17:05:23)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import json
>>>
```

**JSON Functions**

| Function | Libraries |
|---|---|
| loads | Encodes the Python object from a JSON string representation. |
| dumps | Decodes a python object into a string object. |

**Loading JSON in Python (loads)**

Python loads() function encodes the Python object into a JSON string representation.

**Syntax**

json.loads()


**Example**

```python
>>> Import json
>>> animal = ‘cat’
>>> name = ‘kitty’
>>> data = '{\"' + animal + '\":\"' + name + '\"}'
>>> json.loads(data)
{'cat': 'kitty'}
```

**Dumping JSON in Python (dumps)**
Python can use json.dumps() function for outputing JSON. This function returns the string in json.

**Syntax**

json.dumps()

**Example**

The following example shows arrays under JSON with Python.

```python
>>> data = {'cat': 'kitty'}
>>> json.dumps(data)
{"cat":"kitty"}
````

