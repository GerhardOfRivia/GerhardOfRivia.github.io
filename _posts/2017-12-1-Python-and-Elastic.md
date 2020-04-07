---
layout: posts
excerpt: Searching elasticsearch
---

**Searching elasticsearch in Python**

**Environment**

Before you start with using elasticsearch with python

```python
$ python3
Python 3.5.2 (default, Nov 17 2016, 17:05:23)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from elastricsearch import elasticsearch
>>>
```

**Elasticsearch Functions**

| Function | Libraries |
|---|---|
| search | Execute a search query and get back search hits that match the query. |
| count | Execute a query and get the number of matches for that query. |
| exists | Returns a boolean indicating whether or not given document exists in Elasticsearch.  |
| ping | Returns True if the cluster is up, False otherwise. |
| scroll | Scroll a search request created by specifying the scroll parameter. |

**Elasticsearch Helpers Functions**

| Function | Libraries |
|---|---|
| scan | A simple iterator that yields all hits as returned by underlining scroll requests. |

*Python* 

**Syntax**

```python3
#!/usr/bin/env python3
#vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4
#coding: utf-8
"""
"""
import re
import json

from elasticsearch import elasticsearch, helpers


def generate_search():
    with fp as open('es.json', 'r'):
        return json.load(fp)


def get_data(search_body):
    return res = es.search(index='logs', body=search_body)


def main():
    hostname = 'es-stack'
    es = None
    try:
        es = Elasticsearch([self.hostname], port=port, timeout=120)
    except elasticsearch.ElasticsearchException:
        rasie Exception('Error connecting to ELK stack.')
    search_body = generate_search()
    res = get_data(search_body)


if __name__ == '__main__':
    main()

```

**JSON**

```json
{
   
  "query": {
    "filtered": {
      "query": {
        "query_string": {
          "query": "search on this and if you search for Quoted items then escape them. \"End\". ",
          "analyze_wildcard": "true"
        }
      },
      "filter": {
        "bool": {
          "must": [
            {
              "range": {
                "@timestamp": {
                  "gte": "now-12M",
                  "lte": "now",
                  "format": "epoch_millis"
                }
              }
            }
         ],
          "must_not": []
        }
      }
    }
  },
  "size": 0,
  "aggs": {
    "blah": {
      "terms": {
        "field": "remote_ip.raw",
        "size": 10,
        "order": {
          "_count": "desc"
        }
      }
    }
  }
}
```
