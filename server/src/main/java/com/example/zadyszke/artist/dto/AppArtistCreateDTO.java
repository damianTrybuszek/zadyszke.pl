package com.example.zadyszke.artist.dto;

import com.example.zadyszke.artist.*;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppArtistCreateDTO {
    private String description;
    private String webpage;

    private Specialization specialization;
    private AppUser appUser;
    private List<UserSkill> userSkills;
    private List<UserEducation> userEducations;
    private List<UserCertificates> userCertificates;

    public AppArtist toAppArtist(){
        return AppArtist.builder()
                .description(this.description)
                .webpage(this.webpage)
                .specialization(this.specialization)
                .appUser(this.appUser)
                .userSkills(this.userSkills)
                .userEducations(this.userEducations)
                .userCertificates(this.userCertificates)
                .build();
    }

    public static AppArtistCreateDTO of(AppArtist artist){
        return AppArtistCreateDTO.builder()
                .description(artist.getDescription())
                .webpage(artist.getWebpage())
                .specialization(artist.getSpecialization())
                .appUser(artist.getAppUser())
                .userSkills(artist.getUserSkills())
                .userEducations(artist.getUserEducations())
                .userCertificates(artist.getUserCertificates())
                .build();
    }
}
