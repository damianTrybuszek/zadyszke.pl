package com.example.zadyszke.user.dto;

import com.example.zadyszke.comment.artist.ArtistComment;
import com.example.zadyszke.comment.buyer.BuyerComment;
import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppUserGetDTO {
    private long id;
    private String username;
    private String email;
    private LocalDateTime registeredTime;
    private LocalDateTime lastModifiedDate;
    private boolean isArtist;
    private boolean isEmailVerified;

    private List<Offer> userPostedOffers;
    private List<Offer> userPurchasedOffers;

    private List<BuyerComment> buyerComments;
    private List<ArtistComment> artistComments;

    private List<Integer> description;
    private List<Integer> skills;
    private List<Integer> education;
    private List<Integer> certificates;

    public AppUser toAppUser(){
        return AppUser.builder()
                .id(this.id)
                .username(this.username)
                .email(this.email)
                .registeredTime(this.registeredTime)
                .lastModifiedDate(this.lastModifiedDate)
                .userPostedOffers(this.userPostedOffers)
                .userPurchasedOffers(this.userPurchasedOffers)
                .buyerComments(this.buyerComments)
                .artistComments(this.artistComments)
                .isArtist(this.isArtist)
                .isEmailVerified(this.isEmailVerified)
                .description(this.description)
                .skills(this.skills)
                .education(this.education)
                .certificates(this.certificates)
                .build();
    }

    public static AppUserGetDTO of(AppUser user){
        return AppUserGetDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .email(user.getEmail())
                .registeredTime(user.getRegisteredTime())
                .lastModifiedDate(user.getLastModifiedDate())
                .userPostedOffers(user.getUserPostedOffers())
                .userPurchasedOffers(user.getUserPurchasedOffers())
                .buyerComments(user.getBuyerComments())
                .artistComments(user.getArtistComments())
                .isArtist(user.isArtist())
                .isEmailVerified(user.isEmailVerified())
                .description(user.getDescription())
                .skills(user.getSkills())
                .education(user.getEducation())
                .certificates(user.getCertificates())
                .build();
    }
}
