#!/bin/bash

# Functions for our database.
# This is so that we can search, read, manipulate and add new information

# All implemented functions
# TODO: Implement me!

# This is taking in the first argument after the sh name
# Arguments end up being in an Array (if access all arguments $@)
file=$1
type=$2

# Figure out a way to assign continuing arguments
# first argument doesn't contain .csv then it's the next variable
# if the second variable doesn't contain array (water dark flying etc) it's the third

# What is allArugments=$@
allArguments=$@

#echo $allArguments

function addition {
    
    num=0
    # handles specifically 3 numbers being added
    #num=$(($1 + $2 + $3))

    # How we could improve
    for i in $allArguments
    do
        ((num+=$i))
    done
    echo $num
}

#addition

function addSuperSecretCoolFunction {
    echo "Y'all be great!"
}

function readDatabase {
    # Simple read the database information and print it back to the user
    # a=$1 make sure your variables make sense! and offer information

    # Lets define our database
    #local file=scripting_pokemon_compendium.csv

    ## What if we had another database
    # but we also" want a default
    if [ !$file ] # This considers the value to be false, because it contains nothing
    then
        file=../data/scripting_pokemon_compendium.csv
    fi

    cat $file
}

# TODO: Implement me!
function addToDatabase {
    # Add new individual pokemon
    # How can I improve? make a new function?
    echo "['Levitate'],2,2,2,0.5,2,0.5,0.5,1,2,0.5,1,2,1,1,0.5,1,1,0.5,130,30720,90,700,3,Eon PokÃ©mon,100,1250000,2,80,Latiosãƒ©ãƒ†ã‚£ã‚ªã‚¹,Latios,100,381,160,120,110,dragon,psychic,60,3,1" >> $file
}

# TODO: Implement me!
function selectAColumnAndType {
    # Select one column
    searchForType | cut -d ',' -f 31
}

# TODO: Implement me!
function searchForType {
    # Search for specified type of pokemon
    #type=water
    readDatabase | grep "$type"
}

# TODO: Implement me!
function generateTeamWith1000HP {
    # Randomly take pokemon from the database until the HP total is 100 for you team
    totalHP=0;
    numOfPokemon=0;
    IFS=$'\n' # Set Internal Field Separator as for loops consider any whitespace an element to iterate $'\n' (for newline) will only execute at end of each row
    for i in $(get20RandomPokemon) # Check below function IMPL
    do
        ((totalHP+=$(echo $i | awk -F ',' '{ print $29 }' )))
        if (( "$totalHP" <= "1000" ))
        then
            echo $i | awk -F ',' '{ print "Name: " $31, "HP: " $29, "Abilities: " $1 }'
        else
            ((totalHP-=$(echo $i | awk -F ',' '{ print $29 }' )))
            break;
        fi
    done
    echo $totalHP
}

# SHUFFLE THOSE POKEMON
function get20RandomPokemon {
    IFS=$'\n'
    for i in $(readDatabase | tail -n +2 | shuf | head -20)
    do
        echo $i 
    done
}

function avgColumn {
    # Has flaws in that if you select non-numerical column it will fail
    total=0;
    pokemonCount=$(readDatabase | tail -n +2 | wc -l)
    printColumnHeaders
    read -rep 'What column would you like to find the avg of?'$'\n' column
    index=$(findIndex $column)

    echo $index
    IFS=$'\n'
    for i in $(readDatabase | tail -n +2 | cut -d ',' -f $index)
    do
        ((total+=$i))
    done

    echo $(( total / pokemonCount )) 

}

function printColumnHeaders {
    readDatabase | head -1
}

# TODO: Implement me!
function selectAColumn {
    # Select one column
    columnNum=$1 # specific parameter that is being provided by the argument in the script call
    readDatabase | cut -d ',' -f $1
}


# TODO: Implement me!
function selectColumns {
    # Select multipole or a range of columns 
    # Make me more user friendly
    readDatabase | cut -d ',' -f 1,2,30-41 
}

declare -A dict;
    num=1;
    for i in $(cat ../data/scripting_pokemon_compendium.csv | head -1 | sed "s/,/\n/g"); do
        ## We want key value pairs
        dict+=([$i]=$num)
        ((num++))
    done

function findIndex {
    
    if [[ $1 == "abilities" ]]
    then
        echo 0;
    else
        echo ${dict[$1]} 
    fi
}


# General function structure
#function functionName {
 #   echo "statements to be run"
 #   echo "statements to be run"
 #   echo "statements to be run"
#} closing curly brace indicates the end of the functions purpose

# script executions

#searchForType

avgColumn
generateTeamWith1000HP