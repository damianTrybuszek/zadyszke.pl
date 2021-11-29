package com.example.zadyszke.user.dto;

import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppUserRegisterDTO {
    private String name;
    private String surname;
    private String username;
    private String email;
    private String password;
    private LocalDateTime registeredTime;

    public AppUser toAppUser(){
        return AppUser.builder()
                .name(this.name)
                .surname(this.surname)
                .username(this.username)
                .email(this.email)
                .password(this.password)
                .registeredTime(this.registeredTime)
                .build();
    }

    public static AppUserRegisterDTO of(AppUser user){
        return AppUserRegisterDTO.builder()
                .name(user.getName())
                .surname(user.getSurname())
                .username(user.getUsername())
                .email(user.getEmail())
                .password(user.getPassword())
                .registeredTime(user.getRegisteredTime())
                .build();
    }
}
