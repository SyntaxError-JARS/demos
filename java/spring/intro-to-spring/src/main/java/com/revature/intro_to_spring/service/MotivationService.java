package com.revature.intro_to_spring.service;

import org.springframework.stereotype.Service;

@Service
public class MotivationService {

    public String provideMotivationalQuote(){
        return "I hated every minute of training, but I said, \'Don't quit. Suffer now and live the rest of your life as a champion. - Muhammad Ali\' - Romane Robb";
    }
}
