package com.example.zadyszke.user.dto;

import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppUserModifyDTO {
    private String name;
    private String surname;
    private String username;
    private String email;
    private String password;
    private List<Integer> description;
    private List<Integer> skills;
    private List<Integer> education;
    private List<Integer> certificates;

    public AppUser toAppUser(){
        return AppUser.builder()
                .name(this.name)
                .surname(this.surname)
                .username(this.username)
                .email(this.email)
                .password(this.password)
                .description(this.description)
                .skills(this.skills)
                .education(this.education)
                .certificates(this.certificates)
                .build();
    }

    public static AppUserModifyDTO of(AppUser user){
        return AppUserModifyDTO.builder()
                .name(user.getName())
                .surname(user.getSurname())
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .build();
    }
}
