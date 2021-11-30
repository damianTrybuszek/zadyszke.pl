package com.example.zadyszke.rating.artist;


import com.example.zadyszke.user.AppUser;
import com.example.zadyszke.user.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistRatingService {

    private final AppUserRepository appUserRepository;
    private final ArtistRatingRepository artistRatingRepository;

    @Autowired
    public ArtistRatingService(AppUserRepository appUserRepository, ArtistRatingRepository artistRatingRepository) {
        this.appUserRepository = appUserRepository;
        this.artistRatingRepository = artistRatingRepository;
    }

    public List<ArtistRating> getAll(){
        return artistRatingRepository.findAll();
    }

    public List<ArtistRating> get(long artistId){
        return appUserRepository.findById(artistId).orElseThrow().getArtistRatings();
    }

    public ArtistRating get(long artistId, long commentId){
        ArtistRating artistRating = artistRatingRepository.getById(commentId);
        if(artistRating.getArtistId() != artistId){
            throw new IllegalArgumentException("Wrong artist ID!");
        }
        return artistRating;
    }

    public ArtistRating create(long artistId, ArtistRating artistRating){
        AppUser artist = appUserRepository.getById(artistId);
        artist.addArtistRating(artistRating);
        artistRatingRepository.save(artistRating);
        return artistRating;
    }

    public ArtistRating modify(long artistId, long rateId, ArtistRating newData){
        ArtistRating artistRatingFromDb = artistRatingRepository.getById(rateId);
        if(artistRatingFromDb.getArtistId() != artistId){
            throw new IllegalArgumentException("Wrong artist ID!");
        }
        artistRatingFromDb.modify(newData);
        artistRatingRepository.save(artistRatingFromDb);
        return artistRatingFromDb;
    }

    public void delete(long artistId, long rateId){
        ArtistRating artistRatingFromDb = artistRatingRepository.getById(rateId);
        if(artistRatingFromDb.getArtistId() != artistId){
            throw new IllegalArgumentException("Wrong artist ID!");
        }
        artistRatingRepository.delete(artistRatingFromDb);
    }
}