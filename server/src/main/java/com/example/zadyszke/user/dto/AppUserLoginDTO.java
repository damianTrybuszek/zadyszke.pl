package com.example.zadyszke.user.dto;

import com.example.zadyszke.user.AppUser;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppUserLoginDTO {
    private String email;
    private String password;

    public AppUser toAppUser(){
        return AppUser.builder()
                .email(this.email)
                .password(this.password)
                .build();
    }

    public static AppUserLoginDTO of(AppUser user){
        return AppUserLoginDTO.builder()
                .email(user.getEmail())
                .password(user.getPassword())
                .build();
    }
}
