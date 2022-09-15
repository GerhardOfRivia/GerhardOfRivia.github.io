---
layout: posts
excerpt: Java Blocking Queues, I took these notes back in my undergrad. Maybe they will help someone. Good luck
---

**Generic Blocking Queue Class**

*Problems of producing and consuming*

+ [Dining Pholosophers](https://en.wikipedia.org/wiki/Dining_philosophers_problem)

**For example**

*You cannot use anything that is part of the java.util.concurrent package*

`import java.util.concurrent.BlockingQueue;`

> BlockingQueue implementations are thread-safe. Along with all queuing methods are atomic in nature and use internal locks.

**Limit the size**

+ With unbounded queues a producers can get far ahead of the consumers with an unbounded queue. If consumer is not catching up with producer then it may cause an OutOfMemoryError. In situations like these, it may be better to signal a would-be producer that the queue is full, and to give up quickly with a failure. In other words: the producers are naturally throttled.

**When to use a Blocking queue**

+ Blocking Queue is normally used in concurrent application. IE: more then one thread of execution.
+ It provides a correct, thread-safe implementation
+ Memory consumption should be limited as well

**Example**

```java
public final class Queue<T> {

        private LinkedList<T> queue;

        private int size;

        private Object lock;

        public Queue(int size) {
                this.size = size;
                this.queue = new LinkedList<T>();
                this.lock = new Object();
        }

        public int getCount() {
                synchronized (this.lock) {
                        return queue.size();
                }
        }

        public void enqueue(T item) throws InterruptedException {
                synchronized (this.lock) {
                        while (this.queue.size() == this.size) {
                                this.lock.wait();
                        }
                        if (this.queue.size() == 0) {
                                this.lock.notify();
                        }
                        this.queue.add(item);
                }
        }

        public T dequeue() throws InterruptedException {
                synchronized (this.lock) {
                        while (this.queue.size() == 0) {
                                this.lock.wait();
                        }
                        if (this.queue.size() == this.size) {
                                this.lock.notify();
                        }
                        return this.queue.remove(0);
                }
        }

}
```
