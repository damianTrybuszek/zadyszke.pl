package com.example.zadyszke.artist;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class UserSkill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private MasteryLevel masteryLevel;
    private Skill skill; //TODO API to be implemented or to change it to class and load from database

}
