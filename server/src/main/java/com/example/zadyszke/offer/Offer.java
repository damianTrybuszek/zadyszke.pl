package com.example.zadyszke.offer;

import com.example.zadyszke.comment.Comment;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;
import static javax.persistence.GenerationType.SEQUENCE;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Offer {

    @Id
    @GeneratedValue
    private long id;

    private String title;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="offer_id")
    private List<Comment> comments;

    private String content;

    private String author;

    public void addComment(Comment comment){
        comment.setCreationDateTime(LocalDateTime.now());
        comment.setModifyDateTime(null);
        this.comments.add(comment);
        comment.setOffer(this);
    }
}