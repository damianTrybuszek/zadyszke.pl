package com.example.zadyszke.comment.ArtistComment;


import com.example.zadyszke.offer.Offer;
import com.example.zadyszke.offer.OfferRepository;
import com.example.zadyszke.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistCommentService {

    private final UserRepository userRepository;
    private final ArtistCommentRepository artistCommentRepository;


    @Autowired
    public ArtistCommentService(UserRepository userRepository, ArtistCommentRepository artistCommentRepository) {
        this.userRepository = userRepository;
        this.artistCommentRepository = artistCommentRepository;
    }


    public List<ArtistComment> get(long userId){
        return userRepository.findById(userId).orElseThrow().getUserComments();
    }

    public ArtistComment get(long offerId, long commentId){
        ArtistComment artistComment = artistCommentRepository.getById(commentId);
        if(artistComment.getOffer().getId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }

        return artistComment;
    }

    public ArtistComment create(long offerId, ArtistComment artistComment){
        Offer offer = offerRepository.getById(offerId);
        offer.addComment(artistComment);
        artistCommentRepository.save(artistComment);
        return artistComment;
    }

    public ArtistComment modify(long offerId, long commentId, ArtistComment newData){
        ArtistComment artistCommentFromDb = artistCommentRepository.getById(commentId);
        if(artistCommentFromDb.getOffer().getId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        artistCommentFromDb.modify(newData);
        artistCommentRepository.save(artistCommentFromDb);
        return artistCommentFromDb;
    }

    public void delete(long offerId, long commentId){
        ArtistComment artistCommentFromDb = artistCommentRepository.getById(commentId);
        if(artistCommentFromDb.getOffer().getId() != offerId){
            throw new IllegalArgumentException("Wrong offer ID!");
        }
        artistCommentRepository.delete(artistCommentFromDb);
    }
}