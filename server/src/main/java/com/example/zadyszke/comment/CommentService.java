package com.example.zadyszke.comment;


import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.offer.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final OfferRepository offerRepository;
    private final CommentRepository commentRepository;


    @Autowired
    public CommentService(OfferRepository offerRepository, CommentRepository commentRepository) {
        this.offerRepository = offerRepository;
        this.commentRepository = commentRepository;
    }


    public List<Comment> get(long offerId){
        return offerRepository.findById(offerId).orElseThrow().getComments();
    }

    public Comment get(long articleId, long commentId){
        Comment comment = commentRepository.getById(commentId);
        if(comment.getOffer().getId() != articleId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }

        return comment;
    }

    public Comment create(long articleId, Comment comment){
        Offer offer = offerRepository.getById(articleId);
        offer.addComment(comment);
        commentRepository.save(comment);
        return comment;
    }

    public Comment modify(long articleId, long commentId, Comment newData){
        Comment commentFromDb = commentRepository.getById(commentId);
        if(commentFromDb.getOffer().getId() != articleId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        commentFromDb.modify(newData);
        commentRepository.save(commentFromDb);
        return commentFromDb;
    }

    public void delete(long articleId, long commentId){
        Comment commentFromDb = commentRepository.getById(commentId);
        if(commentFromDb.getOffer().getId() != articleId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        commentRepository.delete(commentFromDb);
    }
}