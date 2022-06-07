package com.revature.intro_to_spring.models;

import com.revature.intro_to_spring.service.MotivationService;

public class BaseballCoach implements Coachable{

    private final MotivationService motivationService;

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
