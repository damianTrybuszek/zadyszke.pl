package com.example.zadyszke.cart;

import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class CartDTO {
    private long id;
    private LocalDateTime lastModifiedDate;

    private AppUser cartOwner;
    private List<Offer> offersInCart;

    public Cart toCart(){
        return Cart.builder()
                .id(this.id)
                .lastModifiedDate(this.lastModifiedDate)
                .cartOwner(this.cartOwner)
                .offersInCart(this.offersInCart)
                .build();
    }

    public static CartDTO of(Cart cart){
        return CartDTO.builder()
                .id(cart.getId())
                .lastModifiedDate(cart.getLastModifiedDate())
                .cartOwner(cart.getCartOwner())
                .offersInCart(cart.getOffersInCart())
                .build();
    }
}
