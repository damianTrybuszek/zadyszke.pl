package com.example.zadyszke.offer;

import com.example.zadyszke.comment.Comment;
import com.example.zadyszke.user.AppUser;
import lombok.*;
import org.apache.commons.lang3.StringUtils;

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
    @GeneratedValue
    private long id;

    private String title;
    private String content;
    private BigDecimal price;
    private String category;
    private LocalDateTime creationDate;
    private LocalDateTime lastModifiedDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "author_id")
    private AppUser author;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="offer_id")
    private List<Comment> comments;

    public void addComment(Comment comment){
        comment.setCreationDateTime(LocalDateTime.now());
        comment.setModifyDateTime(null);
        this.comments.add(comment);
        comment.setOffer(this);
    }

    public void modify(Offer newOfferData){
        modifyTitle(newOfferData);
        modifyContent(newOfferData);
        modifyPrice(newOfferData);
    }

    private void modifyTitle(Offer newOfferData) {
        if (StringUtils.isNotBlank(newOfferData.getTitle())){
            this.setTitle(newOfferData.getTitle());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyContent(Offer newOfferData) {
        if (StringUtils.isNotBlank(newOfferData.getContent())){
            this.setContent(newOfferData.getContent());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }

    private void modifyPrice(Offer newOfferData) {
        if (newOfferData.getPrice() != null){
            this.setPrice(newOfferData.getPrice());
            this.setLastModifiedDate(LocalDateTime.now());
        }
    }
}