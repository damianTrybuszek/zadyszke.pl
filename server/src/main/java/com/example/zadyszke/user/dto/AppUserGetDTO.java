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

    private List<Offer> userPostedOffers;
    private List<Offer> userPurchasedOffers;

    private List<BuyerComment> buyerComments;
    private List<ArtistComment> artistComments;

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
                .build();
    }
}
