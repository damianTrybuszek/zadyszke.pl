package com.example.zadyszke.wishlist.dto;

import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import com.example.zadyszke.wishlist.Wishlist;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class WishlistCreateDTO {
    private AppUser wishlistOwner;
    private List<Offer> offersInWishlist;

    public Wishlist toWishlist(){
        return Wishlist.builder()
                .wishlistOwner(this.wishlistOwner)
                .offersInWishlist(this.offersInWishlist)
                .build();
    }

    public static WishlistCreateDTO of(Wishlist wishlist){
        return WishlistCreateDTO.builder()
                .wishlistOwner(wishlist.getWishlistOwner())
                .offersInWishlist(wishlist.getOffersInWishlist())
                .build();
    }
}
