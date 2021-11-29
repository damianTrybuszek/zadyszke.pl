package com.example.zadyszke.rating.offer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class OfferRatingDTO {

    private Long id;
    private long offerId;
    private Long rate;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public OfferRating toComment(){
        return OfferRating.builder()
                .id(id)
                .offerId(offerId)
                .rate(rate)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static OfferRatingDTO of(OfferRating offerRating){
        return OfferRatingDTO.builder()
                .id(offerRating.getId())
                .offerId(offerRating.getOfferId())
                .rate(offerRating.getRate())
                .author(offerRating.getAuthor())
                .creationDateTime(offerRating.getCreationDateTime())
                .modifyDateTime(offerRating.getModifyDateTime())
                .build();
    }
}