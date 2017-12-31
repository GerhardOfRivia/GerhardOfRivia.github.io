---
layout: posts
---

## Environment

Before you start with using elasticsearch with python

```python
$ python3
Python 3.5.2 (default, Nov 17 2016, 17:05:23)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from elastricsearch import elasticsearch
>>>
```

## Elasticsearch Functions 

| Function | Libraries |
|---|---|
| loads | Encodes the Python object from a JSON string representation. |
| dumps | Decodes a python object into a string object. |

## Searching elasticsearch in Python

Python 

### Syntax

json.loads()

```
#!/usr/bin/env python3
#vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
#coding: utf-8
"""
"""
import re
import json

from elasticsearch import elasticsearch, helpers


class ElasticSearch(object):
    """
    Search ELK stack by the command line.

    :param str hostname: Hostname of the ELK stack.
    :param int port: API port of the ELK stack. 9200
    :param int time: Amount of time to search. 1
    :param str metric: Metric of time to search. ['days', 'hours'] hours
    """
    def __init__(self, hostname, port=9200, time=1, metric='hours'):
        self.hostname = hostname
        try:
            self.es = Elasticsearch([self.hostname], port=port, timeout=120)
        except elasticsearch.ElasticsearchException:
            rasie Exception('Error connecting to ELK stack.')
    self.generate_time(time, metric)



```
