package com.example.zadyszke.rating.artist;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class ArtistRatingDTO {

    private long artistId;
    private Long id;
    private Long rate;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public ArtistRating toComment(){
        return ArtistRating.builder()
                .id(id)
                .artistId(artistId)
                .rate(rate)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static ArtistRatingDTO of(ArtistRating artistRating){
        return ArtistRatingDTO.builder()
                .id(artistRating.getId())
                .artistId(artistRating.getArtistId())
                .rate(artistRating.getRate())
                .author(artistRating.getAuthor())
                .creationDateTime(artistRating.getCreationDateTime())
                .modifyDateTime(artistRating.getModifyDateTime())
                .build();
    }
}