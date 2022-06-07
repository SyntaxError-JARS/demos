package com.revature.intro_to_spring.models;

import com.revature.intro_to_spring.service.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("myCoach")
@Scope("prototype") // the default without this annotation is a Singleton
public class BaseballCoach implements Coachable{

    private final MotivationService motivationService;

    @Autowired // this isn't required as a @Component by default takes the custom Constructor as long as there is a SINGLE one
    public BaseballCoach(MotivationService motivationService) {
        this.motivationService = motivationService;
    }

    @Override
    public String getDailyWorkout() {
        return "Today's workout is to spend one hour in the batting cage";
    }

    @Override
    public String getMotivation() {
        return "Baseball coach says: " + motivationService.provideMotivationalQuote();
    }
}
