---
layout: posts
---

## Environment

Before you start with using requests in Python, you need to make sure you have the requests module available.

```python
Python 3.5.2 (default, Nov 17 2016, 17:05:23)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import requests
>>>
```

If you do not have it download it or install it using pip.
```bash
$ pip3 install requests
$
```

## Request Objects
| Objects | Libraries |
|---|---|
| Request | Encodes the Python object from a JSON string representation. |
| Session | Decodes a python object into a string object. |

## Loading a web page in Python (Request)

Python requests function allows for easy simple human REST calls.

### Syntax

`Request('HTTP VERB', url, data, headers)`

### Example

```python
>>> from requests import Request, Session
>>> session = Session()
>>> prepped = Request('GET', url, headers={'Content-Type':’application/json’}).prepare()
>>> resp = s.send(prepped)
>>> print(resp.text())
```

## Catching Execptions

Python can use json.dumps() function for outputing JSON. This function returns the string in json.

### Example

The following example shows catching exceptions created by using the Requests object.

```python
>>> from requests import Request, Session
>>> session = Session()
>>> prepped = Request('GET', url, headers={'Content-Type':’application/json’}).prepare()
>>> try:
>>>     resp = s.send(prepped)
>>>     r.raise_for_status()
>>> except requests.exceptions.HTTPError as err:
>>>     print(err)
>>>     sys.exit(1)
>>> except requests.exceptions.Timeout: # Maybe set up for a retry
>>>     print(‘error: connection timeout.’)
>>> except requests.exceptions.TooManyRedirects:
>>>     print(‘error: bad url too many redirections.’)
>>> except requests.exceptions.RequestException as e:
>>>     print(‘error: ’ + e)
>>>     sys.exit(1)
```


