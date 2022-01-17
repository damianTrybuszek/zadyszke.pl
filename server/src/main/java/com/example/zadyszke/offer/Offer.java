package com.example.zadyszke.offer;

import com.example.zadyszke.comment.offer.OfferComment;
import com.example.zadyszke.offer.dto.OfferModifyDTO;
import com.example.zadyszke.rating.offer.OfferRating;
import com.example.zadyszke.user.AppUser;
import lombok.*;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private String content;
    private BigDecimal price;
    private LocalDateTime creationDate;
    private LocalDateTime lastModifiedDate;
    private Category category;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_image")
    private List<OfferImage> offerImages;

    @ManyToOne(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "author_id")
    private AppUser author;

    @OneToMany(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="offer_comment")
    private List<OfferComment> comments;

    @OneToMany(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name="offer_rating")
    private List<OfferRating> ratings;

    public void addComment(OfferComment offerComment){
        offerComment.setCreationDateTime(LocalDateTime.now());
        offerComment.setModifyDateTime(null);
        this.comments.add(offerComment);
        offerComment.setOfferId(this.id);
    }
  
    public void addRating(OfferRating offerRating){
        offerRating.setCreationDateTime(LocalDateTime.now());
        offerRating.setModifyDateTime(null);
        this.ratings.add(offerRating);
        offerRating.setOfferId(this.id);
    }

    public void modify(OfferModifyDTO newOfferData){
        modifyTitle(newOfferData);
        modifyContent(newOfferData);
        modifyPrice(newOfferData);
    }

    private void modifyTitle(OfferModifyDTO newOfferData) {
        if (StringUtils.isNotBlank(newOfferData.getTitle())){
            this.setTitle(newOfferData.getTitle());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyContent(OfferModifyDTO newOfferData) {
        if (StringUtils.isNotBlank(newOfferData.getContent())){
            this.setContent(newOfferData.getContent());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyPrice(OfferModifyDTO newOfferData) {
        if (newOfferData.getPrice() != null){
            this.setPrice(newOfferData.getPrice());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }
}