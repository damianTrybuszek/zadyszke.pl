package com.example.zadyszke.rating.artist;


import lombok.*;
import org.apache.commons.lang3.StringUtils;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ArtistRating {

    private long artistId;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long rate;
    private String author;

    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public void modify(ArtistRating newData) {
        if (StringUtils.isNotBlank(Long.toString(newData.getRate()))) {
            this.setRate(newData.getRate());
            this.setModifyDateTime(LocalDateTime.now());
        }

        if(StringUtils.isNotBlank(newData.getAuthor())) {
            this.setAuthor(newData.getAuthor());
            this.setModifyDateTime(LocalDateTime.now());
        }
    }

}