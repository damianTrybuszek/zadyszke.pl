package com.example.zadyszke.artist.dto;

import com.example.zadyszke.artist.*;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppArtistGetDTO {
    private long id;
    private String description;
    private String webpage;

    private Specialization specialization;
    private AppUser appUser;
    private List<UserSkill> userSkills;
    private List<UserEducation> userEducations;
    private List<UserCertificates> userCertificates;

    public AppArtist toAppArtist(){
        return AppArtist.builder()
                .id(this.id)
                .description(this.description)
                .webpage(this.webpage)
                .specialization(this.specialization)
                .appUser(this.appUser)
                .userSkills(this.userSkills)
                .userEducations(this.userEducations)
                .userCertificates(this.userCertificates)
                .build();
    }

    public static AppArtistGetDTO of(AppArtist artist){
        return AppArtistGetDTO.builder()
                .id(artist.getId())
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
