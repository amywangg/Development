# -*- coding: utf-8 -*-
"""
Created on Tue May 29 08:42:46 2018

@author: awang3
"""
# =============================================================================
#  Notes: DECORATORS           
# If you wanted to add new capabilities you can either:
# - Add extra code (Functionality) to your old function
# - Create a brand new function that contains the old code,
#   and add the new code to that
# - If you wanted to remove it you would have to manually delete it
# - You can toggle it on/off with a decorator
# =============================================================================

def hello (name ='AMY'):
    print("the hello() function has been executed")
 
    def greet():
        return '\t This is the greet() inside hello'
    def welcome():
        return "\t This is the welcome() inside hello" 
    
    if name == 'AMY':
        return greet
    else:
        return welcome
myfunc = hello('AMY')
print(myfunc())

def decorator (someFunc):
    
    def func():
        print("Some extra code")
        someFunc()
        print("Code after original function")
    return func

decorated = decorator(hello)
print(decorated())
    

        
        
        
        