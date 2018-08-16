# -*- coding: utf-8 -*-
"""
Created on Mon May 28 15:44:12 2018

@author: awang3
"""
#from myModult import my_func
import myModult

#my_func()


myModult.func()

if __name__=="__main__": 
    print("MyModult is being run directly")
else:
    print("MyModult has been imported!")
    
#   TRY EXCEPT FINALLY
def askInt():
    
    while True: 
        try:
            result = int(input("Please Provide a Number: "))
        except:
            print("Whoops! THat is not a number")
            continue
        else:
            print("That is a number, the number is {}".format(result))
            break
        finally:
            print("This will always run!")
askInt()
            
            
            