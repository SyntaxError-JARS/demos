package com.revature.intro_to_spring.service;

import org.springframework.stereotype.Service;

@Service
public class CodingMotivationService {

    public String provideMotivationalQuote(){
        return "One of these days charles will finally remember to drink some water and hydrate instead of purely coffee and beer";
    }
}
