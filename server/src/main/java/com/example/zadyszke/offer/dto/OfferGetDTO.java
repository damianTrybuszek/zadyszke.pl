package com.example.zadyszke.offer.dto;

import com.example.zadyszke.comment.offer.OfferComment;
import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.user.AppUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OfferGetDTO {

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
    private LocalDateTime creationDate;
    private LocalDateTime lastModifiedDate;
    private boolean basicSpeedDelivery;
    private boolean standardSpeedDelivery;
    private boolean premiumSpeedDelivery;

    private AppUser author;
    private String category;
    private String subCategory;
    private List<OfferComment> comments;

    public Offer toOffer() {
        return Offer.builder()
                .id(this.id)
                .title(this.title)
                .description(this.description)
                .requirements(this.requirements)
                .category(this.category)
                .subCategory(this.subCategory)
                .basicRedos(this.basicRedos)
                .standardRedos(this.standardRedos)
                .premiumRedos(this.premiumRedos)
                .basicPrice(this.basicPrice)
                .standardPrice(this.standardPrice)
                .premiumPrice(this.premiumPrice)
                .basicSpeedDelivery(this.basicSpeedDelivery)
                .standardSpeedDelivery(this.standardSpeedDelivery)
                .premiumSpeedDelivery(this.premiumSpeedDelivery)
                .creationDate(this.creationDate)
                .lastModifiedDate(this.lastModifiedDate)
                .author(this.author)
                .comments(this.comments)
                .build();
    }

    public static OfferGetDTO of(Offer offer) {
        return OfferGetDTO.builder()
                .id(offer.getId())
                .title(offer.getTitle())
                .description(offer.getDescription())
                .requirements(offer.getRequirements())
                .category(offer.getCategory())
                .subCategory(offer.getSubCategory())
                .basicRedos(offer.getBasicRedos())
                .standardRedos(offer.getStandardRedos())
                .premiumRedos(offer.getPremiumRedos())
                .basicPrice(offer.getBasicPrice())
                .standardPrice(offer.getStandardPrice())
                .premiumPrice(offer.getPremiumPrice())
                .basicSpeedDelivery(offer.isBasicSpeedDelivery())
                .standardSpeedDelivery(offer.isStandardSpeedDelivery())
                .premiumSpeedDelivery(offer.isPremiumSpeedDelivery())
                .creationDate(offer.getCreationDate())
                .lastModifiedDate(offer.getLastModifiedDate())
                .author(offer.getAuthor())
                .comments(offer.getComments())
                .build();
    }


}
