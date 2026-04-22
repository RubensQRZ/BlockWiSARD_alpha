# -*- coding: utf-8 -*-
"""Functions to retrieve the WiSARD foders with images do train List.

Copyright (c) 2019 Rubens Lacerda Queiroz
Licensed under the Apache License, Version 2.0 (the "License"):
    http://www.apache.org/licenses/LICENSE-2.0
"""
from __future__ import unicode_literals, absolute_import, print_function
import os


def get_folders_list():
    """
    :return: A list with the folders with images to train WiSARD.
    """
    currentpath = os.path.dirname(os.path.abspath(__file__))
    parentpath = os.path.dirname(currentpath)
    path = os.path.join(parentpath, 'A-IMAGENS_TREINO')
    dirlist = [item for item in os.listdir(path) if os.path.isdir(os.path.join(path, item))]
    dirlist.sort()
    return dirlist

