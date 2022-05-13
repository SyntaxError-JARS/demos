package jank_unit;

public class Calculator {

    public int add(int num1, int num2){
        return num1 + num2;
    }

    // Polymorphism - either overloading (shown below) or overriding
    public int add(int... nums){
        int result = 0;
        for(int num:nums){
            result += num;
        }
        return result;
    }

}
