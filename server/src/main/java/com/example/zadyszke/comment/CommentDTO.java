package com.example.zadyszke.comment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class CommentDTO {

    private Long id;
    private String content;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public Comment toComment(){
        return Comment.builder()
                .id(id)
                .content(content)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static CommentDTO of(Comment comment){
        return CommentDTO.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .author(comment.getAuthor())
                .creationDateTime(comment.getCreationDateTime())
                .modifyDateTime(comment.getModifyDateTime())
                .build();
    }
}