#!/bin/bash

# We want an associate array to make key-value pairs to assign names 
# of columns to indices. This is so we don't need to memorize the row/index number
# You need to make a concious decision on the tools you want to use
# to extract these columns.

declare -A dict;
num=1;
for i in $(cat data_backup/fifth_generation_pokemon.csv | head -1 | sed "s/,/\n/g"); do
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

function addAPokemon {
    #TODO: Write the code to add a pokemon entry into the bottom of our pokemon_compendium.csv
    echo hi
}

function multiIndex {
    array=()
    for i in "$@"; do
        array+=$(findIndex $i),
    done

    echo $array
}

function selectColumn {
   abilities=$(findIndex $1)
    #TODO: while loop, 
    echo $abilities;

    while IFS=,  read -a array ; do 
        echo "$1 is ${array[$abilities]}" ; 
    done < scripting_pokemon_compendium.CSV | tail -n +2
}

function selectColumns {
   abilities=$(multiIndex $@ | sed 's/,$//')
    #TODO: while loop, 
    echo $abilities;

   cat scripting_pokemon_compendium.CSV | head -2 | cut -d ',' -f $abilities
}

# selectColumn hp
#multiIndex hp name abilities
selectColumns hp name
