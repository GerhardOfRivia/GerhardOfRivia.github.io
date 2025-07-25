---
layout: posts
excerpt: modretro updater
---

# FastApi: Overview

I started writing this as notes for a ongoing project, at this point AI will tell you everything you need.

FastAPI is a cutting-edge web framework designed for building high-performance APIs in Python 3.7+ with a strong emphasis on modern development practices. Leveraging standard Python type hints ensures type safety and facilitates automatic documentation generation. Built on top of Starlette for web functionalities and Pydantic for data operations, FastAPI offers a comprehensive solution for web development needs.

Compatibility with most ASGI servers, including Uvicorn, Hypercorn, and Daphne, ensures flexible deployment options, empowering developers to choose the best-suited server for their application requirements. With its asynchronous programming model based on Python's asyncio library, FastAPI delivers exceptional performance and scalability without the complexity of managing threads or multiprocessing.

The framework excels in simplifying API development and documentation. Its automatic generation of interactive API documentation, powered by OpenAPI schemas, offers a user-friendly interface for exploring and testing endpoints. This feature streamlines the development process and promotes collaboration by providing a clear and accessible overview of the API's resources.

FastAPI embraces Python's type annotations, enabling seamless integration with Pydantic for data validation, serialization, and documentation generation. By leveraging type annotations, developers can ensure code quality, enhance maintainability, and boost productivity.

Moreover, FastAPI supports dependency injection, facilitating the management of dependencies within applications. Decoupling classes and their dependencies, promotes modularity, maintainability, and testability, fostering code reuse and scalability across API endpoints.

Additionally, FastAPI offers built-in support for WebSocket connections, enabling the development of real-time applications with bidirectional communication between clients and servers. Its ability to define background tasks allows for asynchronous execution of tasks such as sending emails or processing data, enhancing application responsiveness and efficiency.

With built-in security features for authentication, authorization, and data validation, FastAPI empowers developers to build secure APIs with confidence, ensuring robust protection against potential threats and vulnerabilities.

## Asyncio

```python
import asyncio

async def greet(name):
    print(f"Hello, {name}!")
    await asyncio.sleep(1)  # Simulate some asynchronous operation
    print(f"Goodbye, {name}!")

async def main():
    tasks = [greet("Alice"), greet("Bob")]
    await asyncio.gather(*tasks)

asyncio.run(main())
```

When you run this code, you'll see that both greetings are printed almost simultaneously, and then both farewell messages are printed after a delay of 1 second. This shows both the simplicity and complexity of how asynchronous programming in Python allows you to execute multiple tasks concurrently, improving performance and efficiency.

## OpenAPI

![swagger_ui](https://static1.smartbear.co/swagger/media/images/tools/opensource/swagger_ui.png)

This allows anyone to visualize and interact with the API’s resources without having any of the implementation logic in place. You can also use the JSON that is generated to generate code to interact with these apis. Although sometimes it is better to write a custom client.

## Types

```python
def add_numbers(x: int, y: int) -> int:  # Type annotations for parameters and return type
    """Add two numbers."""
    return x + y

result = add_numbers(3, 5)
print(result)  # Output: 8

# This will cause a type error because a string is being passed instead of an integer
# result = add_numbers(3, "5")
```

Python typing, introduced officially in Python 3.5+, and further enhanced in subsequent versions, offers several benefits that contribute to improved code quality, maintainability, and developer productivity

## Depends

```python
from fastapi import FastAPI, Depends

app = FastAPI()

# Define a dependency function

def get_dependency():
    return "Dependency Injection"

# Define an endpoint that depends on the get_dependency function
@app.get("/")
async def read_root(dependency: str = Depends(get_dependency)):
    return {"message": f"Hello, {dependency}"}
```

We define an endpoint read_root that depends on the get_dependency function. We use the Depends class to declare the dependency. FastAPI will automatically call the get_dependency function and pass its return value to the dependency parameter of the read_root function. You can use dependencies to perform tasks such as authentication and database access. Overall, dependency injection in FastAPI provides a clean and flexible way to manage dependencies and promote code reuse across your API endpoints.

## Websocket

```python
from fastapi import FastAPI, WebSocket

app = FastAPI()

# WebSocket endpoint
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")
```

As FastApi is already async it makes it easier to work with websockets easier, providing native support for handling WebSocket connections in an efficient and scalable manner. This makes FastAPI a compelling choice for building real-time, interactive web applications that leverage WebSocket technology.

## BackgroundTasks

```python
from fastapi import FastAPI, BackgroundTasks
import time

app = FastAPI()

def send_email(email: str, message: str):
    # Simulate sending an email
    print(f"Sending email to {email}: {message}")
    time.sleep(5)  # Simulate some time-consuming operation
    print("Email sent successfully")

@app.post("/send-email/")
async def send_email_route(email: str, message: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email, email, message)
    return {"message": "Email will be sent in the background"}
```

FastAPI allows you to define background tasks that can be run asynchronously. This is useful for performing tasks such as sending emails or processing data without blocking the main application. This can be helpful when interfacing with additional resources to fulfill a request.
