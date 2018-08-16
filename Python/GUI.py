# -*- coding: utf-8 -*-
"""
Created on Tue May 29 10:57:13 2018

@author: awang3
"""

from ipywidgets import interact,interactive,fixed
import ipywidgets as widgets

def func(x):
    return x
@interact(func, x=10)
