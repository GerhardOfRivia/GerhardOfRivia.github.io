---
layout: posts
excerpt: Working with Python and Requests. Requests is maybe one of the best parts of python. Simple but also very extensive.
---

**Environment**

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

**Request Objects**

| Objects | Libraries |
|---|---|
| Request | The Request object contains all of the information returned by the server. |
| Session | The Session object allows you to persist certain parameters across requests. |

**Loading a web page in Python (Request)**

Python requests function allows for easy simple human REST calls.

**Syntax**

`Request('HTTP VERB', url, data, headers)`

**Example**

```python
>>> from requests import Request, Session
>>> session = Session()
>>> prepped = Request('GET', url, headers={'Content-Type':’application/json’}).prepare()
>>> resp = s.send(prepped)
>>> print(resp.json())
```

**Catching Execptions**

Python can use json.dumps() function for outputing JSON. This function returns the string in json.

**Example**

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

**Tricks with a Post**

There are times that you may want to send data that is not form-encoded. If you pass in a string instead of a dict, that data will be posted directly.

```
>>> import json
>>> url = 'https://api.github.com/some/endpoint'
>>> payload = {'some': 'data'}
>>> r = requests.post(url, data=json.dumps(payload))
```

Instead of encoding the dict yourself, you can also pass it directly using the json parameter (added in version 2.4.2) and it will be encoded automatically:

```
>>> url = 'https://api.github.com/some/endpoint'
>>> payload = {'some': 'data'}
>>> r = requests.post(url, json=payload)
```

Source: [Requests: More complicated post](http://docs.python-requests.org/en/master/user/quickstart/#more-complicated-post-requests)
