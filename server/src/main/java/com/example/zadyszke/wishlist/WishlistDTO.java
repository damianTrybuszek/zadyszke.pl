package com.example.zadyszke.wishlist;

import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class WishlistDTO {
    private long id;
    private LocalDateTime lastModifiedDate;

    private AppUser wishlistOwner;
    private List<Offer> offersInWishlist;

    public Wishlist toWishlist(){
        return Wishlist.builder()
                .id(this.id)
                .lastModifiedDate(this.lastModifiedDate)
                .wishlistOwner(this.wishlistOwner)
                .offersInWishlist(this.offersInWishlist)
                .build();
    }

    public static WishlistDTO of(Wishlist wishlist){
        return WishlistDTO.builder()
                .id(wishlist.getId())
                .lastModifiedDate(wishlist.getLastModifiedDate())
                .wishlistOwner(wishlist.getWishlistOwner())
                .offersInWishlist(wishlist.getOffersInWishlist())
                .build();
    }
}
