# -*- coding: utf-8 -*-
"""
Created on Mon May 28 14:25:54 2018

@author: awang3
"""

class Dog () :
#    Class object attribute
#    Same for any instance of a class
    species = 'Mammal'
    
    def __init__(self, breed, name, gender):
#        attributes
#        we take in the argument
#        Then we assign it using self.attribut_name
        self.breed = breed
        self.name = name
        self.gender = gender
        
    def bark(self):
        print("Woof! My name is {}".format(self.name))
        
dog_1 = Dog(breed="Lab", name="Larry" ,gender = "M" )
dog_2 = Dog (breed="Husky",name="Henny" ,gender = "M" )

print(dog_2.species)
dog_2.bark()


