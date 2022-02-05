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
    private String description;
    private String requirements;
    private int basicRedos;
    private int standardRedos;
    private int premiumRedos;
    private BigDecimal basicPrice;
    private BigDecimal standardPrice;
    private BigDecimal premiumPrice;
    private boolean basicSpeedDelivery;
    private boolean standardSpeedDelivery;
    private boolean premiumSpeedDelivery;
    private LocalDateTime creationDate;
    private LocalDateTime lastModifiedDate;
    private String category;
    private String subCategory;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_faq")
    private List<Faq> faq;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "offer_tag")
    private List<Tag> tags;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "offer_image")
    private List<OfferImage> offerImages;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "author_id")
    private AppUser author;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "offer_comment")
    private List<OfferComment> comments;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinColumn(name = "offer_rating")
    private List<OfferRating> ratings;

    public void addComment(OfferComment offerComment) {
        offerComment.setCreationDateTime(LocalDateTime.now());
        offerComment.setModifyDateTime(null);
        this.comments.add(offerComment);
        offerComment.setOfferId(this.id);
    }

    public void addRating(OfferRating offerRating) {
        offerRating.setCreationDateTime(LocalDateTime.now());
        offerRating.setModifyDateTime(null);
        this.ratings.add(offerRating);
        offerRating.setOfferId(this.id);
    }

    public void modify(OfferModifyDTO newOfferData) {
        modifyTitle(newOfferData);
        modifyDescription(newOfferData);
    }

    private void modifyTitle(OfferModifyDTO newOfferData) {
        if (StringUtils.isNotBlank(newOfferData.getTitle())) {
            this.setTitle(newOfferData.getTitle());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyDescription(OfferModifyDTO newOfferData) {
        if (StringUtils.isNotBlank(newOfferData.getDescription())) {
            this.setDescription(newOfferData.getDescription());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }
}