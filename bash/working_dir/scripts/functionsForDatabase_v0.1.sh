#!/bin/bash

# Functions for our database.
# This is so that we can search, read, manipulate and add new information

# All implemented functions
# TODO: Implement me!
function readDatabase {
    # Simple read the database information and print it back to the user
    # a=$1 make sure your variables make sense! and offer information

    # Lets define our database
    local file=scripting_pokemon_compendium.csv

    cat $file
}

# TODO: Implement me!
function addToDatabase {
    # Add new individual pokemon
    echo "['Levitate'],2,2,2,0.5,2,0.5,0.5,1,2,0.5,1,2,1,1,0.5,1,1,0.5,130,30720,90,700,3,Eon PokÃ©mon,100,1250000,2,80,Latiosãƒ©ãƒ†ã‚£ã‚ªã‚¹,Latios,100,381,160,120,110,dragon,psychic,60,3,1" >> $file
}

# TODO: Implement me!
function selectAColumnAndType {
    # Select one column
    searchForType | cut -d ',' -f 30
}

# TODO: Implement me!
function searchForType {
    # Search for specified type of pokemon
    type=water
    readDatabase | grep "$type"
}

# TODO: Implement me!
function generateTeamWith100HP {
    # Randomly take pokemon from the database until the HP total is 100 for you team
    echo Implement
}

# TODO: Implement me!
function selectAColumn {
    # Select one column
    readDatabase | cut -d ',' -f 30
}


# TODO: Implement me!
function selectColumns {
    # Select multipole or a range of columns
    echo Implement
}

# TODO: Implement me!
function findIndex {
    # Find index of column header
    echo Implement
}

# General function structure
#function functionName {
 #   echo "statements to be run"
 #   echo "statements to be run"
 #   echo "statements to be run"
#} closing curly brace indicates the end of the functions purpose

# script executions

#selectAColumnAndType

read -ep $'Type in the name:\n' fia
echo $fia