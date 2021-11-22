package com.example.zadyszke.offer;

import com.example.zadyszke.comment.OfferComment.OfferComment;
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
public class OfferDTO {

    private long id;
    private String title;
    private String content;
    private String category;
    private BigDecimal price;
    private LocalDateTime creationDate;
    private LocalDateTime lastModifiedDate;

    private AppUser author;
    private List<OfferComment> comments;

    public Offer toOffer(){
        return Offer.builder()
                .id(this.id)
                .title(this.title)
                .content(this.content)
                .category(this.category)
                .price(this.price)
                .creationDate(this.creationDate)
                .lastModifiedDate(this.lastModifiedDate)
                .author(this.author)
                .comments(this.comments)
                .build();
    }

    public static OfferDTO of(Offer offer){
        return OfferDTO.builder()
                .id(offer.getId())
                .title(offer.getTitle())
                .content(offer.getContent())
                .category(offer.getCategory())
                .price(offer.getPrice())
                .creationDate(offer.getCreationDate())
                .lastModifiedDate(offer.getLastModifiedDate())
                .author(offer.getAuthor())
                .comments(offer.getComments())
                .build();
    }


}
