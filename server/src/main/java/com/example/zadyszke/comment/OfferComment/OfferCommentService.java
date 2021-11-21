package com.example.zadyszke.comment.OfferComment;


import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.offer.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferCommentService {

    private final OfferRepository offerRepository;
    private final OfferCommentRepository offerCommentRepository;


    @Autowired
    public OfferCommentService(OfferRepository offerRepository, OfferCommentRepository offerCommentRepository) {
        this.offerRepository = offerRepository;
        this.offerCommentRepository = offerCommentRepository;
    }


    public List<OfferComment> get(long offerId){
        return offerRepository.findById(offerId).orElseThrow().getComments();
    }

    public OfferComment get(long offerId, long commentId){
        OfferComment offerComment = offerCommentRepository.getById(commentId);
        if(offerComment.getOfferId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }

        return offerComment;
    }

    public OfferComment create(long offerId, OfferComment offerComment){
        Offer offer = offerRepository.getById(offerId);
        offer.addComment(offerComment);
        offerCommentRepository.save(offerComment);
        return offerComment;
    }

    public OfferComment modify(long offerId, long commentId, OfferComment newData){
        OfferComment offerCommentFromDb = offerCommentRepository.getById(commentId);
        if(offerCommentFromDb.getOfferId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        offerCommentFromDb.modify(newData);
        offerCommentRepository.save(offerCommentFromDb);
        return offerCommentFromDb;
    }

    public void delete(long offerId, long commentId){
        OfferComment offerCommentFromDb = offerCommentRepository.getById(commentId);
        if(offerCommentFromDb.getOfferId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        offerCommentRepository.delete(offerCommentFromDb);
    }
}