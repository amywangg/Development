# -*- coding: utf-8 -*-
"""
Created on Mon May 28 15:27:38 2018

@author: awang3
"""

class Book ():
    
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        
#        SPECIAL METHODS
#        Display String Value
    def __str__ (self):
        return f"{self.title} by {self.author}"
    
#       Display Length
    def __len__(self):
        return self.pages

#        Action When Deleted
    def __del__(self):
        print("Book was deleted")
    
#       Delete Variable
    del()
    