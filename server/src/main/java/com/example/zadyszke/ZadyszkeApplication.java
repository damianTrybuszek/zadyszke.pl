package com.example.zadyszke;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ZadyszkeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZadyszkeApplication.class, args);
	}

}
