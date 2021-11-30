package com.example.zadyszke.wishlist;

import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import com.example.zadyszke.wishlist.dto.WishlistModifyDTO;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Wishlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private LocalDateTime lastModifiedDate;

    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "user_id")
    private AppUser wishlistOwner;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "wishlist_id")
    private List<Offer> offersInWishlist;

    public void modify(WishlistModifyDTO wishlist) {
        this.offersInWishlist = wishlist.getOffersInWishlist();
        this.setLastModifiedDate(LocalDateTime.now());
    }
}
