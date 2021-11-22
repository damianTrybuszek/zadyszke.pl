package com.example.zadyszke.comment.ArtistComment;


import com.example.zadyszke.offer.Offer;
import lombok.*;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ArtistComment {

    private long artistId;

    @Id
    @GeneratedValue(strategy=IDENTITY)
    private Long id;


    private String content;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public void modify(ArtistComment newData) {
        if (StringUtils.isNotBlank(newData.getContent())) {
            this.setContent(newData.getContent());
            this.setModifyDateTime(LocalDateTime.now());
        }

        if(StringUtils.isNotBlank(newData.getAuthor())) {
            this.setAuthor(newData.getAuthor());
            this.setModifyDateTime(LocalDateTime.now());
        }
    }

}