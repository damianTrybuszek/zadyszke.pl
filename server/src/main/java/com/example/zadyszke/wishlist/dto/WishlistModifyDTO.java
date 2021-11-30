package com.example.zadyszke.wishlist.dto;

import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import com.example.zadyszke.wishlist.Wishlist;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class WishlistModifyDTO {
    private AppUser wishlistOwner;
    private List<Offer> offersInWishlist;

    public Wishlist toWishlist(){
        return Wishlist.builder()
                .wishlistOwner(this.wishlistOwner)
                .offersInWishlist(this.offersInWishlist)
                .build();
    }

    public static WishlistModifyDTO of(Wishlist wishlist){
        return WishlistModifyDTO.builder()
                .wishlistOwner(wishlist.getWishlistOwner())
                .offersInWishlist(wishlist.getOffersInWishlist())
                .build();
    }
}
