package com.revature.intro_to_spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.Properties;

@Configuration
@ComponentScan("com.revature") // this scans the entire package and sub-packages for anything with a Stereotype Annotation
@PropertySource("app.properties")
public class AppConfig {

}
