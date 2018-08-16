# -*- coding: utf-8 -*-
"""
Created on Mon May 28 15:01:45 2018

@author: awang3
"""
#       ABSTRACT CLASS || BASE
class Animal:
    
    def __init__(self):
        print("Animal Created")
#        Methods
    def what_am_i (self):
        print("I am an animal")
    def eat(self):
        print('I am eating')
    
        
#   Dog inherits Animal
class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
        print("Dog Created")
#    Can OVERRIDE the Animal method
    def what_am_i (self):
        print("I am a Dog")
        
#        POLYMORPHISM
class Cat():
    def __init__(self,name):
        self.name = name
    def speak (self):
        return self.name + " says meow!"
    
class Cow():
    def __init__(self,name):
        self.name = name
    def speak (self):
        return self.name + " says Moo!"

cow_1 = Cow("Cooper")
cat_1 = Cat("Crow")

for pet in [cow_1, cat_1]:
    print(type(pet))
    print(pet.speak())
    

    
    