# -*- coding: utf-8 -*-
"""
Created on Tue May 29 10:21:28 2018

@author: awang3
"""
# Datetime Module
import datetime
# (hr, min, sec, ms)
t=datetime.time(5,25,1)
print (datetime.time.min , datetime.time.max)
print (datetime.time.resolution)

today = datetime.date.today() #YYYY-MM-DD
# will print out timestructure in tuple form
today.timetuple()
today.day # prints the day number

## Python Debugger
#import pdb
#x = [1,3,4]
#y=2
#z=3
#result = y + z
#pdb.set_trace()
#result2 = y + x # will get error

# Regular Expressions
import re
string = ["term1", "term2"]
text= 'This string has term1 but not the other term'
re.search (string, 'term1')

for pattern in string:
    print ('Searching for "%s" in: \n"%s"' % (pattern, text),)
    #check for match
    if re.search(pattern, text):
        print("Match was found.\n")
    else:
        print("No Match was found.\n")
        
        