package com.example.zadyszke.user;

import com.example.zadyszke.comment.ArtistComment.ArtistComment;
import com.example.zadyszke.comment.BuyerComment.BuyerComment;
import com.example.zadyszke.offer.Offer;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class AppUserDTO {

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

    public static AppUserDTO of(AppUser user){
        return AppUserDTO.builder()
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
