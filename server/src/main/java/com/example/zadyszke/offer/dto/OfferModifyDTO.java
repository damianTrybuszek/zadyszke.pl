package com.example.zadyszke.offer.dto;

import com.example.zadyszke.comment.offer.OfferComment;
import com.example.zadyszke.offer.Category;
import com.example.zadyszke.offer.Offer;
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
public class OfferModifyDTO {
    private String title;
    private String content;
    private BigDecimal price;

    private AppUser author;
    private Category category;
    private List<OfferComment> comments;

    public Offer toOffer(){
        return Offer.builder()
                .title(this.title)
                .content(this.content)
                .category(this.category)
                .price(this.price)
                .author(this.author)
                .comments(this.comments)
                .build();
    }

    public static OfferModifyDTO of(Offer offer){
        return OfferModifyDTO.builder()
                .title(offer.getTitle())
                .content(offer.getContent())
                .category(offer.getCategory())
                .price(offer.getPrice())
                .author(offer.getAuthor())
                .comments(offer.getComments())
                .build();
    }


}
