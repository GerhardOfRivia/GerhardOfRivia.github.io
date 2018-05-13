---
layout: posts
---


## Objects

Classes can be thought of as blueprints for creating objects. So what is an object? Well an object is a way of abstracting data, a fancy way of keeping like data together. 

### Part One

Keeping it simple.

```python
class Lamp(object):

    __init__(self):
        self.power_status = False


    turn_off(self):
        self.power_status = False


    turn_on(self):
        self.power_status = True
```

In the above example you have a simple house hold object, the lamp can be on or off. 

```python
lamp = Lamp()
print('Lamp power status: {}'.format(lamp.power_status))
lamp.turn_on()
print('Lamp power status: {}'.format(lamp.power_status))
lamp.turn_off()
```

Add another value

```python
class Lamp(object):

    __init__(self, wattage):
        self.wattage = wattage
        self.power_status = False


    turn_off(self):
        self.power_status = False


    turn_on(self):
        self.power_status = True


    get_wattage(self):
        return wattage
```

Here we expand on this more and add the wattage the lamp may pull when on.

```python
lamp = Lamp(100)
print('Lamp power status: {}'.format(lamp.power_status))
print('Lamp wattage: {}'.format(lamp.wattage))
lamp.turn_on()
print('Lamp power status: {}'.format(lamp.power_status))
print('Lamp wattage: {}'.format(lamp.wattage))
lamp.turn_off()
print('Lamp wattage: {}'.format(lamp.get_wattage()))
```

```python
    __init__(self, wattage=25):
        self.wattage = wattage
        self.power_status = False
```

A simple way to add a default value.

```python
big_lamp = Lamp(100)
print('Lamp power status: {}'.format(big_lamp.power_status))
print('Lamp wattage: {}'.format(big_lamp.wattage))
default_lamp = Lamp()
print('Lamp power status: {}'.format(default_lamp.power_status))
print('Lamp wattage: {}'.format(default_lamp.wattage))
```

### Part Two

Such as when I want to program a zoo a base class could keep information such as a name. 


```python
class Animal(object):

    __init__(self, name):
        self.name = name

```

I haven't actually created an animal. Instead, we have created the design of an animal, a sort of instruction manual for constructing "animal" objects. 

Let's look at the following example code:

```python
class Animal(object):

    __init__(self, name):
        self.name = name

    __str__(self):
        return '{}'.format(self.name)


class Fish(Animal):

    __init__(self, type, size):
        super(Fish, self).__init__('Fish')
        self.type = type
        self.size = size


class Dog(Animal):

    __init__(self, name, type, color):
        super(Dog, self).__init__(name)
        self.type = type
        self.color = color

```

Here we now have three different classes but a Animal is not a real-world object, it is an abstraction. When writing code think of the idea of reducing the amount of repeated code. We solve that by creating a Animal class.


