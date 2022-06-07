package com.revature.intro_to_spring.models;

import com.revature.intro_to_spring.service.MotivationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("footballCoach")
public class FootballCoach implements Coachable{

    @Value("${coach-email}")
    private String email;

    @Value("Spring Sprouts")
    private String teamName;

    @Value("#{12*2}") // performs an arithemetic operation
    private int teamSize;

    @Value("${coach-salary}")
    private long salary;


    private MotivationService motivationService;

    @Autowired
    public void setMotivationService(MotivationService motivationService){
        this.motivationService = motivationService;
    }


    public long getSalary() {
        return salary;
    }

    public void setSalary(long salary) {
        this.salary = salary;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public int getTeamSize() {
        return teamSize;
    }

    public void setTeamSize(int teamSize) {
        this.teamSize = teamSize;
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
