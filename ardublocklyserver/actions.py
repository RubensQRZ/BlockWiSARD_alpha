# -*- coding: utf-8 -*-
"""Collection of actions to the ardublocklyserver for relieved HTTP requests.

Copyright (c) 2017 carlosperate https://github.com/carlosperate/
Licensed under the Apache License, Version 2.0 (the "License"):
    http://www.apache.org/licenses/LICENSE-2.0

-->All changes made in ths file by RLQ are marked as modified by RLQ DB4K or RLQ BLockWiSARD

"""


from __future__ import unicode_literals, absolute_import, print_function
import subprocess
import locale
import sys
import os
# local-packages imports
import six
# This package modules
from ardublocklyserver.compilersettings import ServerCompilerSettings
from ardublocklyserver import sketchcreator
# Included by RLQ BlockWiSARD --------------------
from tkinter import filedialog
from tkinter.filedialog import askdirectory
from tkinter import *
from subprocess import Popen, CREATE_NEW_CONSOLE
#-------------------------------------------------
#
# Sketch loading to Arduino functions
#

#BlockWiSARD

process = None

def arduino_ide_send_code(code_str):
    """Create a sketch from a code string and sends it to the Arduino IDE.

    :param code_str: String of Arduino code
    :return: Tuple with (success, ide_mode, std_out, err_out, exit_code)
    """
    sketch_path = create_sketch_from_string(code_str)
    if not sketch_path:
        return False, 'unknown', None, None, 51
    return load_arduino_cli(sketch_path)

#included by RLQ BlockWiSAR -------

def python_ide_send_code(code_str):
    """Create a sketch from a code string and sends it to the Python Interpreter.

    :param code_str: String of Python code
    :return: Tuple with (success, ide_mode, std_out, err_out, exit_code)
    """
    sketch_path = create_sketch_from_string(code_str)
    if not sketch_path:
        return False, 'unknown', None, None, 51
    return load_python_cli(sketch_path)
#-------------------------------------

def create_sketch_from_string(sketch_code):
    #modified by RLQ BlockWiSARD
    """Create an Python Program in location and name given by Settings.

    :param sketch_code: Code for the Program.
    :return: Sketch location. None if there was a problem.
    """
    settings = ServerCompilerSettings()
    return sketchcreator.create_sketch(sketch_dir=settings.sketch_dir,
                                       sketch_name=settings.sketch_name,
                                       sketch_code=sketch_code)


#include by RLQ BlockWiSARD -------------
def load_python_cli(sketch_path):

    success = True
    ide_mode = 'upload'
    std_out, err_out = '', ''
    exit_code = 0
    global process

    # Input sanitation and output defaults
    if not os.path.isfile(sketch_path):
        err_out = 'Provided sketch path is not a valid file: %s' % sketch_path
        success = False
        exit_code = 52
        return success, ide_mode, std_out, err_out, exit_code

    settings = ServerCompilerSettings()

    # Check if CLI flags have been set
    if not settings.load_ide_option:
        success = False
        exit_code = 54
        err_out = 'Launch IDE option not configured in the Settings.'

    if success:

        ide_mode = settings.load_ide_option

        if settings.load_ide_option == 'upload':
            print('\nSending Code to Python...')
            command = "python"
            cli_command = ["cmd", "/C", command, sketch_path]
            print('CLI command: %s' % ' '.join(cli_command))
            process = Popen(cli_command, creationflags=CREATE_NEW_CONSOLE,shell=False)
            #process = subprocess.Popen(cli_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE,shell=False, creationflags=CREATE_NEW_CONSOLE)
            process.communicate()
            '''
            std_out, err_out = process.communicate()
            std_out = six.u(std_out)
            err_out = six.u(err_out)
            exit_code = process.returncode
            '''
            
            # se o botão stop é pressionado, o python retorna um erro do tipo -9.
            if exit_code == -9:
                success = True
                err_out = "Execução do programa terminada pelo usuário"

            print('Python output:\n%s' % std_out)
            print('Python Error output:\n%s' % err_out)
            print('Python Exit code: %s' % exit_code)
            # For some reason Arduino CLI can return 256 on success
            if (process.returncode != 0) and (process.returncode != 256) and (process.returncode != -9):
                success = False
                if exit_code >= 50:
                    # Custom exit codes from server start at 50
                    err_out = '%s\nUnexpected Pyhton exit error code: %s' % \
                              (err_out, exit_code)
                    exit_code = 50

        elif settings.load_ide_option == 'open':
            if settings.IDLE_dir:
                try:
                    cli_command = [settings.IDLE_dir, sketch_path]
                    print('CLI command: %s' % ' '.join(cli_command))
                    subprocess.Popen(cli_command, shell=False)
                    exit_code = 0
                    success = True
                except:
                    exit_code = 50
                    success = False
                    err_out = 'IDLE Python não encontrado'
            else:
                success = False
                exit_code = 50
                err_out = 'Localização do Python IDLE não informada nas configurações'

    return success, ide_mode, std_out, err_out, exit_code


#---------------------------------------------------------------------------------

def load_arduino_cli(sketch_path):
    """Launch subprocess for Arduino IDE CLI with values from Settings.

    Launches a subprocess to invoke the Arduino IDE command line to open,
    verify or upload an sketch, the location of which is indicated in the input
    parameter.

    :param sketch_path: Path to the sketch to load into the Arduino IDE.
    :return: A tuple with the following data (success, ide_mode, std_out,
            err_out, exit_code)
    """
    success = True
    ide_mode = 'unknown'
    std_out, err_out = '', ''
    exit_code = 0

    # Input sanitation and output defaults
    if not os.path.isfile(sketch_path):
        err_out = 'Provided sketch path is not a valid file: %s' % sketch_path
        success = False
        exit_code = 52
        return success, ide_mode, std_out, err_out, exit_code

    settings = ServerCompilerSettings()

    # Check if CLI flags have been set
    if not settings.compiler_dir:
        success = False
        exit_code = 53
        err_out = 'Compiler directory not configured in the Settings.'
    elif not settings.load_ide_option:
        success = False
        exit_code = 54
        err_out = 'Launch IDE option not configured in the Settings.'
    elif not settings.get_arduino_board_flag() and (
            settings.load_ide_option == 'upload' or
            settings.load_ide_option == 'verify'):
        success = False
        exit_code = 56
        err_out = 'Arduino Board not configured in the Settings.'
    elif not settings.get_serial_port_flag() and \
            settings.load_ide_option == 'upload':
        success = False
        exit_code = 55
        err_out = 'Serial Port configured in Settings not accessible.'

    if success:
        ide_mode = settings.load_ide_option
        # Concatenates the CLI command and execute if the flags are valid
        cli_command = [settings.compiler_dir, "%s" % sketch_path]
        if settings.load_ide_option == 'upload':
            print('\nUploading sketch to Arduino...')
            cli_command.append('--upload')
            cli_command.append('--port')
            cli_command.append(settings.get_serial_port_flag())
            cli_command.append('--board')
            cli_command.append(settings.get_arduino_board_flag())
        elif settings.load_ide_option == 'verify':
            print('\nVerifying the sketch...')
            cli_command.append('--board')
            cli_command.append(settings.get_arduino_board_flag())
            cli_command.append('--verify')
        elif settings.load_ide_option == 'open':
            print('\nOpening the sketch in the Arduino IDE...')
        print('CLI command: %s' % ' '.join(cli_command))
        # Python 2 needs the input to subprocess.Popen to be in system encoding
        if sys.version_info[0] < 3:
            sys_locale = locale.getpreferredencoding()
            cli_command = [x.encode(sys_locale) for x in cli_command]

        if settings.load_ide_option == 'open':
            # Open IDE in a subprocess without capturing outputs
            subprocess.Popen(cli_command, shell=False)
            exit_code = 0
        else:
            # Launch the Arduino CLI in a subprocess and capture output data
            process = subprocess.Popen(
                cli_command, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
                shell=False)
            std_out, err_out = process.communicate()
            std_out = six.u(std_out)
            err_out = six.u(err_out)
            exit_code = process.returncode
            print('Arduino output:\n%s' % std_out)
            print('Arduino Error output:\n%s' % err_out)
            print('Arduino Exit code: %s' % exit_code)
            # For some reason Arduino CLI can return 256 on success
            if (process.returncode != 0) and (process.returncode != 256):
                success = False
                if exit_code >= 50:
                    # Custom exit codes from server start at 50
                    err_out = '%s\nUnexpected Arduino exit error code: %s' % \
                              (err_out, exit_code)
                    exit_code = 50

    return success, ide_mode, std_out, err_out, exit_code

#
# Compiler Settings
#
def set_compiler_path(new_path):
    """Open the file browser to select an Arduino IDE executable.

    The new file path is saved into ServerCompilerSettings.

    :param new_path: New path for the Arduino IDE executable.
    :return: Same as get_compiler_path().
    """
    ServerCompilerSettings().compiler_dir = new_path
    return get_compiler_path()


def get_compiler_path():
    """Return the Arduino IDE executable path as stored in the Settings.

    :return: String with compiler path from the Settings.
             None if there is no path saved in the Settings.
    """
    compiler_directory = ServerCompilerSettings().compiler_dir
    if not compiler_directory:
        compiler_directory = None
    return compiler_directory


#included by RLQ BlockWiSARD

#
# Python IDLE Settings
#
def set_IDLE_path(new_path):
    """Open the file browser to select an Python IDLE executable.

    The new file path is saved into ServerCompilerSettings.

    :param new_path: New path for the Python IDLE executable.
    :return: Same as get_IDLE_path().
    """
    root = Tk()
    new_path = filedialog.askopenfilename()
    if new_path != ():
        ServerCompilerSettings().IDLE_dir = new_path
    root.destroy()
    return get_IDLE_path()


def get_IDLE_path():
    """Return the Python IDLE executable path as stored in the Settings.

    :return: String with Python IDLE path from the Settings.
             None if there is no path saved in the Settings.
    """
    IDLE_directory = ServerCompilerSettings().IDLE_dir

    if not IDLE_directory:
        IDLE_directory = None
    return IDLE_directory


#
# WiSARD Train Folders Selection
#

def getWiSARDTrainFoders():
    """Get the folders with images to trains WiSARD

    :return: Dictionary of Folders name
    """
    return ServerCompilerSettings().get_wisard_train_folders()


#
# Sketch settings
#
def set_sketch_path(new_path):
    """Open the file browser to select an folder to store the Arduino Sketch.

    The new file path is saved into ServerCompilerSettings.

    :param new_path: New path to store the Arduino Sketch.
    :return: Same as get_sketch_path().
    """
    ServerCompilerSettings().sketch_dir = new_path
    return get_sketch_path()


def get_sketch_path():
    """Return the path to the folder to store the Arduino Sketch.

    :return: String with the sketch path from the Settings.
             None if there is no path saved in the Settings.
    """
    sketch_directory = ServerCompilerSettings().sketch_dir
    if not sketch_directory:
        sketch_directory = None
    return sketch_directory


#
# Arduino Board settings
#
def set_arduino_board(new_value):
    """Set new Arduino board value in the Settings.

    :param new_value: New Arduino board value, must be the board name, not the
            flag (so 'Uno', not 'arduino:avr:uno').
    :return: Same as the get_arduino_board_selected() function.
    """
    ServerCompilerSettings().arduino_board = new_value
    return get_arduino_board_selected()


def get_arduino_board_selected():
    """Get the selected board from the Settings.

    :return: The currently selected Arduino board from the Settings.
    """
    return ServerCompilerSettings().arduino_board


def get_arduino_boards():
    """Get a list of the available Arduino boards.

    :return: List of Arduino board types.
    """
    return ServerCompilerSettings().get_arduino_board_types()


#
# Serial Port settings
#
def set_serial_port(new_value):
    """Set a new serial port in the Settings.

    :param new_value: New serial port to save.
    :return: Same as get_serial_ports() function.
    """
    ServerCompilerSettings().serial_port = new_value
    return get_serial_port_selected()


def get_serial_ports():
    """Get the available serial ports.

    :return: Dictionary of serial ports.
    """
    return ServerCompilerSettings().get_serial_ports()

#Modified by RLQ BlockWiSARD
def get_serial_port_selected():
    """Get the selected serial port from the Settings.

    :return: The currently selected serial port in the Settings.
    """
    try:
        return ServerCompilerSettings().serial_port
    except:
        return None


#
# Load IDE settings
#
def set_load_ide_only(new_value):
    """Set a new Arduino IDE load option.

    :param new_value: New IDE load option to save in the Settings.
    :return: Same as the get_load_ide_selected() function.
    """
    ServerCompilerSettings().load_ide_option = new_value
    return get_load_ide_selected()


def get_load_ide_options():
    """Get the available Arduino IDE load options.

    :return: Dictionary of IDE load options.
    """
    return ServerCompilerSettings().get_load_ide_options()


def get_load_ide_selected():
    """Get the load option from the Settings.

    :return: The currently selected Arduino IDE option from the Settings.
    """
    return ServerCompilerSettings().load_ide_option



#BlockWiSARD
def terminateSubProcess():

    global process

    success = True
    ide_mode = 'upload'

    if process != None:
        Popen("TASKKILL /F /PID {} /T".format(process.pid))

    return success, ide_mode, 'Programa Terminado pelo Usuário', '...', 0
