package com.example.zadyszke.artist.dto;

import com.example.zadyszke.artist.*;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppArtistModifyDTO {
    private String description;
    private String webpage;

    private Specialization specialization;
    private List<UserSkill> userSkills;
    private List<UserEducation> userEducations;
    private List<UserCertificates> userCertificates;

    public AppArtist toAppArtist(){
        return AppArtist.builder()
                .description(this.description)
                .webpage(this.webpage)
                .specialization(this.specialization)
                .userSkills(this.userSkills)
                .userEducations(this.userEducations)
                .userCertificates(this.userCertificates)
                .build();
    }

    public static AppArtistModifyDTO of(AppArtist artist){
        return AppArtistModifyDTO.builder()
                .description(artist.getDescription())
                .webpage(artist.getWebpage())
                .specialization(artist.getSpecialization())
                .userSkills(artist.getUserSkills())
                .userEducations(artist.getUserEducations())
                .userCertificates(artist.getUserCertificates())
                .build();
    }
}
