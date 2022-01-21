package com.example.zadyszke.user;


import com.example.zadyszke.comment.artist.ArtistComment;
import com.example.zadyszke.comment.buyer.BuyerComment;
import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.rating.artist.ArtistRating;
import com.example.zadyszke.rating.buyer.BuyerRating;
import com.example.zadyszke.user.dto.AppUserModifyDTO;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String surname;
    private String username;
    @Column(unique = true)
    private String email;
    private String password;
    private String phoneNumber;
    private LocalDateTime registeredTime;
    private LocalDateTime lastModifiedDate;
    private AppUserRole role;
    private boolean isArtist;
    private boolean isEmailVerified;
    @ElementCollection
    private List<Integer> description;
    @ElementCollection
    private List<Integer>  skills;
    @ElementCollection
    private List<Integer>  education;
    @ElementCollection
    private List<Integer>  certificates;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private List<Offer> userPostedOffers;

    @ManyToMany(cascade = CascadeType.ALL)
    private List<Offer> userPurchasedOffers;

    @OneToMany(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="buyerId")
    private List<BuyerComment> buyerComments;

    @OneToMany(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="artistId")
    private List<ArtistComment> artistComments;

    @OneToMany(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="buyerId")
    private List<BuyerRating> buyerRatings;

    @OneToMany(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="buyerId")
    private List<ArtistRating> artistRatings;

    public void modify(AppUserModifyDTO modifiedUser){
        modifyName(modifiedUser);
        modifySurname(modifiedUser);
        modifyUsername(modifiedUser);
        modifyEmail(modifiedUser);
        modifyPassword(modifiedUser);
//        modifyIsArtist(modifiedUser);
//        modifyIsEmailVerified(modifiedUser);
    }

    public void addBuyerComment(BuyerComment buyerComment){
        buyerComment.setCreationDateTime(LocalDateTime.now());
        buyerComment.setModifyDateTime(null);
        this.buyerComments.add(buyerComment);
        buyerComment.setBuyerId(id);
    }

    public void addBuyerRating(BuyerRating buyerRating){
        buyerRating.setCreationDateTime(LocalDateTime.now());
        buyerRating.setModifyDateTime(null);
        this.buyerRatings.add(buyerRating);
        buyerRating.setBuyerId(id);
    }


    public void addArtistComment(ArtistComment artistComment){
        artistComment.setCreationDateTime(LocalDateTime.now());
        artistComment.setModifyDateTime(null);
        this.artistComments.add(artistComment);
        artistComment.setArtistId(id);
    }

    public void addArtistRating(ArtistRating artistRating){
        artistRating.setCreationDateTime(LocalDateTime.now());
        artistRating.setModifyDateTime(null);
        this.artistRatings.add(artistRating);
        artistRating.setArtistId(id);
    }

    private void modifyName(AppUserModifyDTO modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getName())){
            this.setName(modifiedUser.getName());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifySurname(AppUserModifyDTO modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getSurname())){
            this.setSurname(modifiedUser.getSurname());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyUsername(AppUserModifyDTO modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getUsername())){
            this.setUsername(modifiedUser.getUsername());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyEmail(AppUserModifyDTO modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getEmail())){
            this.setEmail(modifiedUser.getEmail());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    //TODO upgrade password protection
    private void modifyPassword(AppUserModifyDTO modifiedUser) {
        if (StringUtils.isNotBlank(modifiedUser.getPassword())){
            this.setPassword(modifiedUser.getPassword());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    //TODO add modifyArtist and modifyEmailVerified
//    private void modifyIsArtist(AppUser modifiedUser) {
//        if (modifiedUser.isEmailVerified() !){
//            this.setEmailVerified(modifiedUser.isEmailVerified());
//            this.setLastModifiedDate(LocalDateTime.now());
//        }
//    }


}
