package jank_unit;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class JankDriver {

    public static void main(String[] args) {
        int passed = 0;
        int failed = 0;

        CalcTestSuite cts = new CalcTestSuite();

        // Reflection API from java

        try {
            Class<?> testSuiteClass = Class.forName("jank_unit.CalcTestSuite");

            for(Method classMethod : testSuiteClass.getMethods()){
                if(classMethod.isAnnotationPresent(Test.class)){
                    try {
                        classMethod.invoke(testSuiteClass.newInstance());
                        passed++;
                    } catch ( AssertionException | InstantiationException | IllegalAccessException | InvocationTargetException e) {
                        e.printStackTrace();
                        failed++;
                    } catch (Exception e) {
                        e.printStackTrace();
                        failed++;
                    }
                }
            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            System.out.println("Passed: " + passed + " Failed: " + failed);
        }

    }

    public static void assertThat(boolean conditional){

        if(!conditional){
            throw new AssertionException("Assertion not met");
        }

    }


}
