---
layout: posts
excerpt: A simple next-generation HTTP client for Python httpx.
---

## Environment

Before you start with using httpx in Python, you need to make sure you have the requests module available.

```bash
$ python3
>>> import httpx
```

If you do not have it download it or install it using pip.
```bash
$ pip install httpx
```

### Syntax

`httpx.get('https://example.com/endpoint')`

### Example

```python
import httpx
resp = httpx.get("https://example.com/api")
resp.raise_for_status()
return resp.json()
```

## Catching Execptions

The following example shows a decorator catching exceptions created by using the Response object's `raise_for_status` method. Also assuming that the response was in json so using the Response object's `json` method.

```python
def httpx_wrapper(func):
    @functools.wraps(func)
    def httpx_request(*args, **kwargs):
        try:
            value = func(*args, **kwargs)
            return value
        except ValueError as exc:
            err = f"ValueError {exc} while requesting token."
            raise TypedError(err) from exc
        except httpx.TimeoutException as exc:
            err = f"Timeout error while requesting {exc.request.url!r}"
            raise TypedRetryError(err) from exc
        except httpx.HTTPStatusError as exc:
            err = f"Error response {exc.response.status_code} while requesting {exc.request.url!r}."
            if 400 >= exc.response.status_code < 500:
                raise TypedError(err) from exc
            elif 500 >= exc.response.status_code < 600:
                raise TypedRetryError(err) from exc
        except httpx.RequestError as exc:
            err = f"An error occurred while requesting {exc.request.url!r}."
            raise TypedError(err) from exc
    return httpx_request
```

### Tricks with lots of options

There are times that you want to have a lot of options for a get or post method. In this case I just put everything into a dictionary and then pass the dictionary as a key word args.

```python
@httpx_kwargs
def example():
    httpx_kwargs = {
        "header": {
            "User-Agent": "Tacocat 1234"
            "Content-Type": "application/json"
        },
        "timeout": 15,
        "json": {
            "data": "foobar"
        }
    }
    resp = httpx.post(url, **httpx_kwargs)
```

### Retry and give up

So that last step is to try if you get the `TypedRetryError` and give up with a `TypedError`. We will use another decorator to do this.

```python
def retry_wrapper(func):
    @functools.wraps(func)
    def httpx_request(*args, **kwargs):
        exception = None
        for i in range(0, request_try_count):
            try_ = f"request {i} out of {request_try_count}"
            try:
                value = func(*args, **kwargs)
                return value
            except TypedRetryError as exc:
                exception = exc
                time.sleep(i ** 4)
            except TypedError as exc:
                exception = exc
                break
        raise TypedError("failed all attempts to pull data") from exception
    return httpx_request
```

# Final outcome looks like this.

```python
@retry_wrapper
@httpx_kwargs
def example():
    httpx_kwargs = {
        "header": {
            "User-Agent": "Tacocat 1234"
            "Content-Type": "application/json"
        },
        "timeout": 15,
        "json": {
            "data": "foobar"
        }
    }
    resp = httpx.post("https://example.com/api", **httpx_kwargs)
```

httpx also has some async stuff maybe I will show that off next.

Happy Coding 2021

