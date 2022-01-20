package com.example.zadyszke.offer.dto;

import com.example.zadyszke.comment.offer.OfferComment;
import com.example.zadyszke.offer.Faq;
import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.offer.OfferImage;
import com.example.zadyszke.offer.Tag;
import com.example.zadyszke.user.AppUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OfferCreateDTO {
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
    private String category;
    private String subCategory;

    private AppUser author;
    private List<OfferComment> comments;
    private List<OfferImage> offerImages;
    private List<Faq> faq;
    private List<Tag> tags;

    public Offer toOffer() {
        return Offer.builder()
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
                .author(this.author)
                .comments(this.comments)
                .offerImages(this.offerImages)
                .faq(this.faq)
                .tags(this.tags)
                .build();
    }

    public static OfferCreateDTO of(Offer offer) {
        return OfferCreateDTO.builder()
                .title(offer.getTitle())
                .description(offer.getDescription())
                .category(offer.getCategory())
                .requirements(offer.getRequirements())
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
                .author(offer.getAuthor())
                .comments(offer.getComments())
                .offerImages(offer.getOfferImages())
                .faq(offer.getFaq())
                .tags(offer.getTags())
                .build();
    }


}
