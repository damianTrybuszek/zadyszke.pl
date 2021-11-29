package com.example.zadyszke.rating.offer;


import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.offer.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferRatingService {

    private final OfferRepository offerRepository;
    private final OfferRatingRepository offerRatingRepository;


    @Autowired
    public OfferRatingService(OfferRepository offerRepository, OfferRatingRepository offerRatingRepository) {
        this.offerRepository = offerRepository;
        this.offerRatingRepository = offerRatingRepository;
    }

    public List<OfferRating> getAll(){
        return offerRatingRepository.findAll();
    }


    public List<OfferRating> get(long offerId){
        return offerRepository.findById(offerId).orElseThrow().getRatings();
    }

    public OfferRating get(long offerId, long commentId){
        OfferRating offerRating = offerRatingRepository.getById(commentId);
        if(offerRating.getOfferId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }

        return offerRating;
    }

    public OfferRating create(long offerId, OfferRating offerRating){
        Offer offer = offerRepository.getById(offerId);
        offer.addRating(offerRating);
        offerRatingRepository.save(offerRating);
        return offerRating;
    }

    public OfferRating modify(long offerId, long commentId, OfferRating newData){
        OfferRating offerRatingFromDb = offerRatingRepository.getById(commentId);
        if(offerRatingFromDb.getOfferId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        offerRatingFromDb.modify(newData);
        offerRatingRepository.save(offerRatingFromDb);
        return offerRatingFromDb;
    }

    public void delete(long offerId, long commentId){
        OfferRating offerRatingFromDb = offerRatingRepository.getById(commentId);
        if(offerRatingFromDb.getOfferId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        offerRatingRepository.delete(offerRatingFromDb);
    }
}