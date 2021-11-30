package com.example.zadyszke.rating.buyer;


import com.example.zadyszke.user.AppUser;
import com.example.zadyszke.user.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyerRatingService {

    private final AppUserRepository appUserRepository;
    private final BuyerRatingRepository buyerRatingRepository;


    @Autowired
    public BuyerRatingService(AppUserRepository appUserRepository, BuyerRatingRepository buyerRatingRepository) {
        this.appUserRepository = appUserRepository;
        this.buyerRatingRepository = buyerRatingRepository;
    }


    public List<BuyerRating> getAll(){
        return buyerRatingRepository.findAll();
    }

    public List<BuyerRating> get(long userId){
        return appUserRepository.findById(userId).orElseThrow().getBuyerRatings();
    }

    public BuyerRating get(long buyerId, long commentId){
        BuyerRating buyerRating = buyerRatingRepository.getById(commentId);
        if(buyerRating.getBuyerId() != buyerId){
            throw new IllegalArgumentException("Wrong buyer ID!");
        }
        return buyerRating;
    }

    public BuyerRating create(long buyerId, BuyerRating buyerRating){
        AppUser buyer = appUserRepository.getById(buyerId);
        buyer.addBuyerRating(buyerRating);
        buyerRatingRepository.save(buyerRating);
        return buyerRating;
    }

    public BuyerRating modify(long buyerId, long commentId, BuyerRating newData){
        BuyerRating buyerRatingFromDb = buyerRatingRepository.getById(commentId);
        if(buyerRatingFromDb.getBuyerId() != buyerId){
            throw new IllegalArgumentException("Wrong buyer ID!");
        }
        buyerRatingFromDb.modify(newData);
        buyerRatingRepository.save(buyerRatingFromDb);
        return buyerRatingFromDb;
    }

    public void delete(long buyerId, long commentId){
        BuyerRating buyerRatingFromDb = buyerRatingRepository.getById(commentId);
        if(buyerRatingFromDb.getBuyerId() != buyerId){
            throw new IllegalArgumentException("Wrong buyer ID!");
        }
        buyerRatingRepository.delete(buyerRatingFromDb);
    }
}