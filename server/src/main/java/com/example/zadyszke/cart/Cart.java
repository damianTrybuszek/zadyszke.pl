package com.example.zadyszke.cart;

import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Cart {

    @Id
    @GeneratedValue
    private long id;
    private LocalDateTime lastModifiedDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private AppUser cartOwner;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id")
    private List<Offer> offersInCart;

    public void modify(Cart cart) {
        this.offersInCart = cart.getOffersInCart();
        this.setLastModifiedDate(LocalDateTime.now());
    }
}
