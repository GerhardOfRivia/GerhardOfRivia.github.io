---
layout: default
---

# Message Delivery and Remote procedure call

What are they?

[Remote procedure call](https://en.wikipedia.org/wiki/Remote_procedure_call])

## At-least-once Delivery

In case of failures that lead to message loss or take too long to recover from, messages are retransmitted to assure they are delivered at least once.

How can communication partners or a Message-oriented Middleware ensure that messages are received successfully?

### Context

Sometimes, message duplicity can be coped with by the application using a Message-oriented Middleware. Therefore, for scenarios where message duplicates are uncritical, it shall still be ensured that messages are received.

### Solution

For each message retrieved by a receiver an acknowledgement is sent back to the message sender. In case this acknowledgement is not received after a certain time frame, the message is resend.

## At-most-once Delivery

In the case of failures a request is sent again in case of failure, but request is filtered on the server for duplicates. 

### Context

Sometimes, message duplicity can be coped with by the application using a Message-oriented Middleware. Therefore, for scenarios where message duplicates are uncritical, it shall still be ensured that messages are received.

### Solution

For each message retrieved by a receiver an acknowledgement is sent back to the message sender. In case this acknowledgement is not received after a certain time frame, the message is resend.

## Exactly-once Delivery

In case of failures that lead to message loss or take too long to recover from, messages are retransmitted to assure they are delivered at least once.

How can communication partners or a Message-oriented Middleware ensure that messages are received successfully?

### Context

Sometimes, message duplicity can be coped with by the application using a Message-oriented Middleware. Therefore, for scenarios where message duplicates are uncritical, it shall still be ensured that messages are received.

### Solution

For each message retrieved by a receiver an acknowledgement is sent back to the message sender. In case this acknowledgement is not received after a certain time frame, the message is resend.

