package com.revature.intro_to_spring.models;

import com.revature.intro_to_spring.service.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CodeCoach implements Coachable{

    private final MotivationService motivationService;

    @Autowired
    public CodeCoach(MotivationService motivationService) {
        this.motivationService = motivationService;
    }

    @Override
    public String getDailyWorkout() {
        return "Spend at least 45 min on a medium level leetcode, hackerrank or codingame challenge";
    }

    @Override
    public String getMotivation() {
        return "The code coach who likes to coach coaches on coding coach says: " + motivationService.provideMotivationalQuote();
    }
}
