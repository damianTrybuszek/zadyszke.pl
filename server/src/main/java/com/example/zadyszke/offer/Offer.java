package com.example.zadyszke.offer;

import com.example.zadyszke.comment.OfferComment.OfferComment;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

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
    private List<OfferComment> offerComments;

    private String content;

    private String author;

    private BigDecimal price;

    public void addComment(OfferComment offerComment){
        offerComment.setCreationDateTime(LocalDateTime.now());
        offerComment.setModifyDateTime(null);
        this.offerComments.add(offerComment);
        offerComment.setOffer(this);
    }

}