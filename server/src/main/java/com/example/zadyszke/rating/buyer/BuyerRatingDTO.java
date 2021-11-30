package com.example.zadyszke.rating.buyer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class BuyerRatingDTO {

    private long buyerId;
    private Long id;
    private Long rate;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public BuyerRating toComment(){
        return BuyerRating.builder()
                .id(id)
                .buyerId(buyerId)
                .rate(rate)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static BuyerRatingDTO of(BuyerRating buyerRating){
        return BuyerRatingDTO.builder()
                .id(buyerRating.getId())
                .buyerId(buyerRating.getBuyerId())
                .rate(buyerRating.getRate())
                .author(buyerRating.getAuthor())
                .creationDateTime(buyerRating.getCreationDateTime())
                .modifyDateTime(buyerRating.getModifyDateTime())
                .build();
    }
}