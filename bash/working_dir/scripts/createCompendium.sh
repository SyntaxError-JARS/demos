#!/bin/bash

file=$(ls data_backup/*csv | head -1)

cat $file | head -1 > $1

for i in $(ls data_backup/*csv); do 
	cat $i | grep -v "abilities" ; 
done >> $1