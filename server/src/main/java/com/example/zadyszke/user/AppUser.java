package com.example.zadyszke.user;


import com.example.zadyszke.offer.Offer;
import lombok.*;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppUser {

    @Id
    @GeneratedValue
    private long id;

    private String name;
    private String surname;
    private String username;
    private String email;
    private String password;
    private LocalDateTime registeredTime;
    private LocalDateTime lastModifiedDate;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private List<Offer> userPostedOffers;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Offer> userPurchasedOffers;

    public void modify(AppUser modifiedUser){
        modifyName(modifiedUser);
        modifySurname(modifiedUser);
        modifyUsername(modifiedUser);
        modifyEmail(modifiedUser);
        modifyPassword(modifiedUser);
    }

    private void modifyName(AppUser modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getName())){
            this.setName(modifiedUser.getName());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifySurname(AppUser modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getSurname())){
            this.setSurname(modifiedUser.getSurname());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyUsername(AppUser modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getUsername())){
            this.setUsername(modifiedUser.getUsername());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyEmail(AppUser modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getEmail())){
            this.setEmail(modifiedUser.getEmail());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    //TODO upgrade password protection
    private void modifyPassword(AppUser modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getPassword())){
            this.setPassword(modifiedUser.getPassword());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }
}
