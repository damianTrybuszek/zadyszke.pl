package com.example.zadyszke.comment.buyer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class BuyerCommentDTO {

    private long buyerId;
    private Long id;
    private String content;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public BuyerComment toComment(){
        return BuyerComment.builder()
                .id(id)
                .buyerId(buyerId)
                .content(content)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static BuyerCommentDTO of(BuyerComment buyerComment){
        return BuyerCommentDTO.builder()
                .id(buyerComment.getId())
                .buyerId(buyerComment.getBuyerId())
                .content(buyerComment.getContent())
                .author(buyerComment.getAuthor())
                .creationDateTime(buyerComment.getCreationDateTime())
                .modifyDateTime(buyerComment.getModifyDateTime())
                .build();
    }
}