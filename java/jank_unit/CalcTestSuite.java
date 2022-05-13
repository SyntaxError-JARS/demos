package jank_unit;

public class CalcTestSuite {

    // sut stands for - system under testing
    Calculator sut = new Calculator();


    @Test
    public void test_addTwoNumbers_CorrectAnswer(){
        int expected = 4;
        int actual = sut.add(2,2);

        System.out.println("Test 1 is done.");
        JankDriver.assertThat(expected == actual);
    }

    @Test
    public void test_addAnyNumbers_CorrectAnswer(){
        int expected = 8;
        int actual = sut.add(2,2,2,2);

        System.out.println("Test 2 is done.");
        JankDriver.assertThat(expected == actual);
    }


    public void notATest(){
        System.out.println("booga booga");
    }

    @Test
    public void testButNoImpl(){
        JankDriver.assertThat(false);
    }

    @Test
    public void test_addNegativeNumbers_CorrectAnswer(){
        int expected = 4;
        int actual = sut.add(2,2,2,-2);

        System.out.println("Test 3 is done.");
        JankDriver.assertThat(expected == actual);
    }
}
