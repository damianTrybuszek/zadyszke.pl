package com.example.zadyszke.offer;

import com.example.zadyszke.comment.Comment;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
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
    @GeneratedValue(strategy=IDENTITY)
    private long id;

    @Column(name = "some_title")
    private String title;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @JoinColumn(name="offer_id")
    private List<Comment> comments;

    private String content;

    private String author;

    private BigDecimal price;

    public void addComment(Comment comment){
        comment.setCreationDateTime(LocalDateTime.now());
        comment.setModifyDateTime(null);
        this.comments.add(comment);
        comment.setOffer(this);
    }

}