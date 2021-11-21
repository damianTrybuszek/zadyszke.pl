package com.example.zadyszke.comment.OfferComment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class OfferCommentDTO {

    private Long id;
    private long offerId;
    private String content;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public OfferComment toComment(){
        return OfferComment.builder()
                .id(id)
                .offerId(offerId)
                .content(content)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static OfferCommentDTO of(OfferComment offerComment){
        return OfferCommentDTO.builder()
                .id(offerComment.getId())
                .offerId(offerComment.getOfferId())
                .content(offerComment.getContent())
                .author(offerComment.getAuthor())
                .creationDateTime(offerComment.getCreationDateTime())
                .modifyDateTime(offerComment.getModifyDateTime())
                .build();
    }
}