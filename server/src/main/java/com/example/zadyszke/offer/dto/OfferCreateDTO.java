package com.example.zadyszke.offer.dto;

import com.example.zadyszke.comment.offer.OfferComment;
import com.example.zadyszke.offer.Category;
import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.offer.OfferImage;
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
public class OfferCreateDTO {
    private String title;
    private String content;
    private BigDecimal price;

    private AppUser author;
    private Category category;
    private List<OfferComment> comments;
    private List<OfferImage> images;

    public Offer toOffer(){
        return Offer.builder()
                .title(this.title)
                .content(this.content)
                .category(this.category)
                .price(this.price)
                .author(this.author)
                .comments(this.comments)
                .offerImages(this.images)
                .build();
    }

    public static OfferCreateDTO of(Offer offer){
        return OfferCreateDTO.builder()
                .title(offer.getTitle())
                .content(offer.getContent())
                .category(offer.getCategory())
                .price(offer.getPrice())
                .author(offer.getAuthor())
                .comments(offer.getComments())
                .images(offer.getOfferImages())
                .build();
    }


}
