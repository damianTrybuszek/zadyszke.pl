package com.example.zadyszke.offer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OfferDTO {

    private long id;
    private String title;

    public Offer toOffer(){
        return Offer.builder()
                .id(id)
                .title(title)
                .build();
    }

    public static OfferDTO of(Offer offer){
        return new OfferDTO(offer.getId(), offer.getTitle());
    }


}
