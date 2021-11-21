package com.example.zadyszke.comment.BuyerComment;


import com.example.zadyszke.user.AppUser;
import com.example.zadyszke.user.AppUserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyerCommentService {

    private final AppUserRepository appUserRepository;
    private final BuyerCommentRepository buyerCommentRepository;


    @Autowired
    public BuyerCommentService(AppUserRepository appUserRepository, BuyerCommentRepository buyerCommentRepository) {
        this.appUserRepository = appUserRepository;
        this.buyerCommentRepository = buyerCommentRepository;
    }


    public List<BuyerComment> get(long userId){
        return appUserRepository.findById(userId).orElseThrow().getBuyerComments();
    }

    public BuyerComment get(long buyerId, long commentId){
        BuyerComment buyerComment = buyerCommentRepository.getById(commentId);
        if(buyerComment.getBuyerId() != buyerId){
            throw new IllegalArgumentException("Wrong buyer ID!");
        }
        return buyerComment;
    }

    public BuyerComment create(long buyerId, BuyerComment buyerComment){
        AppUser buyer = appUserRepository.getById(buyerId);
        buyer.addBuyerComment(buyerComment);
        buyerCommentRepository.save(buyerComment);
        return buyerComment;
    }

    public BuyerComment modify(long buyerId, long commentId, BuyerComment newData){
        BuyerComment buyerCommentFromDb = buyerCommentRepository.getById(commentId);
        if(buyerCommentFromDb.getBuyerId() != buyerId){
            throw new IllegalArgumentException("Wrong buyer ID!");
        }
        buyerCommentFromDb.modify(newData);
        buyerCommentRepository.save(buyerCommentFromDb);
        return buyerCommentFromDb;
    }

    public void delete(long buyerId, long commentId){
        BuyerComment buyerCommentFromDb = buyerCommentRepository.getById(commentId);
        if(buyerCommentFromDb.getBuyerId() != buyerId){
            throw new IllegalArgumentException("Wrong buyer ID!");
        }
        buyerCommentRepository.delete(buyerCommentFromDb);
    }
}