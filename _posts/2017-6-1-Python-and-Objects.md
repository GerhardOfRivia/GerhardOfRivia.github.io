---
layout: posts
---


## Objects

Classes can be thought of as blueprints for creating objects. So what is an object? Well an object is a way of abstracting data, a fancy way of keeping like data together. Such as when I want to program a zoo a base class could keep information such as a name. 

```python
$ python3
>>> class Animal(object):
>>> 
>>>     __init__(self, name):
>>>         self.name = name
>>>
```

I haven't actually created an animal. Instead, we have created the design of an animal, a sort of instruction manual for constructing "animal" objects. 

Let's look at the following example code:

```python
$python3
>>> class Animal(object):
>>> 
>>>     __init__(self, name):
>>>         self.name = name
>>>
>>>     __str__(self):
>>>         return '{}'.format(self.name)
>>> 
>>> 
>>> class Fish(Animal):
>>> 
>>>     __init__(self, type, size):
>>>         super(Fish, self).__init__('Fish')
>>>         self.type = type
>>>         self.size = size
>>> 
>>> 
>>> class Dog(Animal):
>>> 
>>>     __init__(self, name, type, color):
>>>         super(Dog, self).__init__(name)
>>>         self.type = type
>>>         self.color = color
>>> 
```

Here we now have three different classes but a Animal is not a real-world object, it is an abstraction. When writing code think of the idea of reducing the amount of repeated code. We solve that by creating a Animal class.


