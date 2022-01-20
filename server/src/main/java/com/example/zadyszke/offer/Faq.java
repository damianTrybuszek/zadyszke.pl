package com.example.zadyszke.offer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Faq {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String question;
    private String answer;
}
