#!/bin/bash

# This is a comment, hi mom
boo=$1
#First option to say hello in the terminal, making a function
function hi {
    echo hi
}

## Only executeable in the script where the function was made
hi

# Additional Syntax for Functions
hello (){
    echo hello $1 # The $1 accessing any arguements
}

## Only executeable in the script where the function was made
hello $boo