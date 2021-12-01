package com.example.zadyszke.artist;

import com.example.zadyszke.artist.dto.AppArtistModifyDTO;
import com.example.zadyszke.user.AppUser;
import lombok.*;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppArtist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;
    private String webpage;
    private Specialization specialization; //TODO implement external API

    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="user_id")
    private AppUser appUser;

    @OneToMany(cascade={CascadeType.ALL})
    @JoinColumn(name="skill_id")
    private List<UserSkill> userSkills;

    @OneToMany(cascade={CascadeType.ALL})
    @JoinColumn(name="education_id")
    private List<UserEducation> userEducations;

    @OneToMany(cascade={CascadeType.ALL})
    @JoinColumn(name="certificates_id")
    private List<UserCertificates> userCertificates;

    public void modify(AppArtistModifyDTO modifiedAppArtist) {
        modifyDescription(modifiedAppArtist);
    }

    public void modifyDescription(AppArtistModifyDTO modifiedAppArtist) {
        if (StringUtils.isNotBlank(modifiedAppArtist.getDescription())){
            this.setDescription(modifiedAppArtist.getDescription());
        }
    }
}
