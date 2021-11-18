package com.example.zadyszke.comment.PurchaserComment;

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
    private String content;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public OfferComment toComment(){
        return OfferComment.builder()
                .id(id)
                .content(content)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static OfferCommentDTO of(OfferComment offerComment){
        return OfferCommentDTO.builder()
                .id(offerComment.getId())
                .content(offerComment.getContent())
                .author(offerComment.getAuthor())
                .creationDateTime(offerComment.getCreationDateTime())
                .modifyDateTime(offerComment.getModifyDateTime())
                .build();
    }
}