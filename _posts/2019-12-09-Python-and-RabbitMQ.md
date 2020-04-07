---
layout: posts
---

**Why?**

What are message queues and why use message queues? In modern cloud architecture, applications are decoupled into smaller, independent building blocks that are easier to develop, deploy and maintain. Message queues provide communication and coordination for these distributed applications.

Message queues can significantly simplify coding of decoupled applications, while improving performance, reliability and scalability. You can also combine message queues with Pub/Sub messaging in a fanout design pattern.

[Read More from Amazon]('https://aws.amazon.com/message-queue/benefits/')

With this I thought I would show how simple the `pika` library in python.

[Read More about pika and RabbitMQ]('https://www.rabbitmq.com/tutorials/tutorial-two-python.html')

**imports**

```
import pika
# Pika Python AMQP Client Library
```

**code**

<script src="https://gist.github.com/AsynchronousGillz/b1634db4388182d3903fbfeffb4c1ad9.js"></script>
