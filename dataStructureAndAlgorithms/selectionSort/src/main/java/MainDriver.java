import java.sql.SQLOutput;

public class MainDriver {

    public static void main(String[] args) {
        // We need to sort the following array

        int[] arrayToBeSorted = {2, 10, 75, 1000, 420} ;

        // even if sort {2, 10, 75, 420, 1000} {420, 1000, 10, 2,75}

        System.out.println("Array Prior");

        for(int a:arrayToBeSorted){
            System.out.println(a);
        }

        System.out.println("Prior array end output");

        sort(arrayToBeSorted);

        System.out.println("Array After");

        for(int a:arrayToBeSorted){
            System.out.println(a);
        }

        System.out.println("After array end output");


        /*
        WE need to sort the above array from smallest to largest
        How?
            Random - because this could be infinite and we aren't elves
            for instance - array[0] > array[1], swap these immediately? (bubble sort)
            3rd variable - this tracks the smallest possible value in the array. (selection sort)

            what do I need for a selection sort?
            - for loops - couple or so
            - if statements (smallest value)_
            - variable outside of the loops
            - Why not make new array? is size chaning = no,
                Option1:
                currentIndexValue=array[0] (420)
                array[0] = array[3] {2, 1000, 10, 2, 75}
                array[3] = currentIndexValue {2, 1000, 10, 420, 75}

                Option2:
                smallestValue=array[3]
                array[3] = array[0] {420, 1000, 10, 420, 75}
                array[0] = smallestValue {2, 1000, 10, 420, 75}

             Step 1 - Define a sort method for java (no implementation yet, describe in next steps)
             Step 2 - for loop - iterate through the array itself, workin in ascending order so smallest will swap to first index so on and so forth
             Step 3 - initial smallest index, array[0], smallestIndex = 0
             Step 4 - for loop - iterate through comparing the subsequent indices, we will reassign the smallestIndex when the value is smaller than the initial
             Step 5 - if(array[currentIndex] < array[smallestIndex]) smallestIndex = currentIndex, for now ended
             Step 6 - Reassign the element at array[i] with the element at position array[smallestIndex] (see above for how to do, it's option 2)
             Step 7 - continue to the next index of the for loop from step 2, repeat until all elements in the array have been checked
         */
    }

    public static void sort(int[] array){
        // Big O notation (referencing the worst case scenario) - this is infact n^2

        for(int i = 0; i < array.length - 1; i++){ // we don't need to look at the final index value. because it's largest by default

            int smallestIndex = i;
            for(int currentIndex = i + 1; currentIndex < array.length; currentIndex++){ // gj soyoung on catching the increment mistake of i++
                System.out.println("Check if min value");
                if(array[currentIndex] < array[smallestIndex]){
                    smallestIndex = currentIndex;
                    System.out.println("index changed");
                }
            }

            System.out.println("Value reassignment");
            int smallestValue = array[smallestIndex];
            array[smallestIndex] = array[i];
            array[i] = smallestValue;
        }



    }
}
