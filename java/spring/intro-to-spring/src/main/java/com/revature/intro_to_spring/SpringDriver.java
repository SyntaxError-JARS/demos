package com.revature.intro_to_spring;

import com.revature.intro_to_spring.models.Coachable;
import com.revature.intro_to_spring.models.FootballCoach;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringDriver {

    public static void main(String[] args) {


        // This is our IoC container for all the beans
        try(AnnotationConfigApplicationContext beanContainer = new AnnotationConfigApplicationContext(AppConfig.class)){
            // Why interface can be defined here in the Declaration? Anonymous classes
            Coachable headCoach = beanContainer.getBean("myCoach", Coachable.class);

            System.out.println(headCoach.getDailyWorkout());
            System.out.println(headCoach.getMotivation());
            System.out.println("<<<<Baseball>>>>");

            Coachable assistantCoach = beanContainer.getBean("myCoach", Coachable.class); // if scope = prototype it will create a new object in memory, otherwise it will use the previously defined object from above
            System.out.println("Is this the same? " + (headCoach == assistantCoach)); // Guess: True, evaluating MEMORY

            System.out.println("<<<<Football>>>>");
            FootballCoach footballCoach = beanContainer.getBean("footballCoach", FootballCoach.class);
            System.out.println(footballCoach.getDailyWorkout());
            System.out.println(footballCoach.getMotivation());
            System.out.println(footballCoach.getEmail());
            System.out.println(footballCoach.getTeamName());
            System.out.println(footballCoach.getTeamSize());
            System.out.println(footballCoach.getSalary());

            System.out.println("<<<<Coding>>>>");
            Coachable codeCoach = beanContainer.getBean("codeCoach", Coachable.class);
            System.out.println(codeCoach.getDailyWorkout());
            System.out.println(codeCoach.getMotivation());

        }
    }

}
