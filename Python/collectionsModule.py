# -*- coding: utf-8 -*-
"""
Created on Tue May 29 09:53:53 2018

@author: awang3
"""

# Counter
from collections import Counter

one = [1,1,1,1,1,2,2,2,2,3,4,4,4,4,4,5,5,5]
print(Counter(one))

s = "Hi my name is amy how many words are there in the sentence"
words= s.split()
print(Counter(words))

c=Counter(words)
print(c.most_common(2)) #prints top two most occurred item

# defaultdict
from collections import defaultdict
d = {"k1":1}

d = defaultdict(object)
d['one']

for item in d:
    print (item)
    
d=defaultdict(lambda:0)
d["one"]
# will auto assign a default value ex: 0 
print(d["one"])

# OrderedDict
from collections import OrderedDict
d = OrderedDict()
d["a"] = 1
d["b"] = 2
d["c"] = 3
d["d"] = 4
d["e"] = 5
# order is retained 
for k,v in d.items():
    print (k,v)
    
# namedtuple
from collections import namedtuple
Dog = namedtuple('Dog','age breed name')
henny = Dog(age=2, breed="Husky", name="Henny")
print(henny.age)
print(henny.breed)




