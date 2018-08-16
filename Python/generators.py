# -*- coding: utf-8 -*-
"""
Created on Tue May 29 09:19:26 2018

@author: awang3
"""
# =============================================================================
# GENERATORS
# - generator functions allow us to write a function that can 
#   send back a value and then later resume to pick up where
#   it left off
# - will automatically suspend and resume their execution and state
#   around the last point of value generation
# - the advantage is that rahter than having to compute an entire 
#   series of values up front, it computes one value and waits until 
#   the next value is called for
# =============================================================================

def createCubes(n):

    for x in range(n):
        yield x**3
    
for x in createCubes(10):
    print(x)

def genFib (n):
    a=1
    b=1
    for i in range(n):
        yield a
        # a=b then b=a+b
        a,b = b,a+b
        
for number in genFib(10):
    print(number)

#   NEXT function
def gen ():
    for x in range(3):
        yield x
#   will print 0,1,2
for number in gen():
    print(number)
g= gen()
#   prints the first g "0"
print (next(g))
#   prints the second g "1"
print (next(g))
#   prints the last g "2"
print (next(g))

#   ITER function
s="hello"
for letter in s:
    print (letter)
s_iter= iter(s)
#   prints first letter "h"
next(s_iter)
#   prints second letter "e"
next(s_iter)
