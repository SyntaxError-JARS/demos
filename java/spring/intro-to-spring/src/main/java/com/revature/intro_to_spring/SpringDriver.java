package com.revature.intro_to_spring;

import com.revature.intro_to_spring.models.Coachable;
import com.revature.intro_to_spring.models.FootballCoach;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringDriver {

    public static void main(String[] args) {


        // This is our IoC container for all the beans
        try(ClassPathXmlApplicationContext beanContainer = new ClassPathXmlApplicationContext("beans.xml")){
            // Why interface can be defined here in the Declaration? Anonymous classes
            Coachable headCoach = beanContainer.getBean("myCoach", Coachable.class);

            System.out.println(headCoach.getDailyWorkout());
            System.out.println(headCoach.getMotivation());

            Coachable assistantCoach = beanContainer.getBean("myCoach", Coachable.class); // if scope = prototype it will create a new object in memory, otherwise it will use the previously defined object from above
            System.out.println("Is this the same? " + (headCoach == assistantCoach)); // Guess: True, evaluating MEMORY

            Coachable footballCoach = beanContainer.getBean("footballCoach", FootballCoach.class);
            System.out.println(footballCoach.getDailyWorkout());
            System.out.println(footballCoach.getMotivation());

        }
    }

}
