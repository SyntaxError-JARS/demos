package com.revature.intro_to_spring.models;

import com.revature.intro_to_spring.service.MotivationService;

public class FootballCoach implements Coachable{

    private MotivationService motivationService;

    public void setMotivationService(MotivationService motivationService){
        this.motivationService = motivationService;
    }

    @Override
    public String getDailyWorkout() {
        return "Today run an hour of suicides";
    }

    @Override
    public String getMotivation() {
        return "Football coach says: " + motivationService.provideMotivationalQuote();
    }
}
