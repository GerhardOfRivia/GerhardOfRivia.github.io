---
layout: posts
---

## Microservices

Designing a system can be what makes or breaks the system. With the move to microservices you see multiple types of implementations, one that I have come across lately is what I have heard being called a resource based microservice architecture. In this you have less state across your microservice ecosystem in place you update a central location for state control. Why is this, well you can focus on a problem such as data concurrency you can focus on this in a single application in place of a generic library you can craft the interface to be more specific for the problems of this microservice. So you can develop faster and in doing so you can have a higher velocity.

### Example

You have a service that reads licence plates, in place of having multiple services storing the data on license plates store all of the data in a single service and have the workers use a rest or grpc interface to send updates to the entry.

### Benefits

If you have to scale your workers you can independently to the database. With this if you have to scale your interface you can indepent to the worker, with this though you may want to scale your database with your interface scale. 
