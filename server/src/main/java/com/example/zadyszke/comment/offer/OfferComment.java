package com.example.zadyszke.comment.offer;


import lombok.*;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class OfferComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long offerId;
    private String content;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public void modify(OfferComment newData) {
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