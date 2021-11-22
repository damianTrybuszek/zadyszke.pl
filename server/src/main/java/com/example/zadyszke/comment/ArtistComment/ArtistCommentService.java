package com.example.zadyszke.comment.ArtistComment;


import com.example.zadyszke.user.AppUser;
import com.example.zadyszke.user.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistCommentService {

    private final AppUserRepository appUserRepository;
    private final ArtistCommentRepository artistCommentRepository;

    @Autowired
    public ArtistCommentService(AppUserRepository appUserRepository, ArtistCommentRepository artistCommentRepository) {
        this.appUserRepository = appUserRepository;
        this.artistCommentRepository = artistCommentRepository;
    }

    public List<ArtistComment> getAll(){
        return artistCommentRepository.findAll();
    }

    public List<ArtistComment> get(long artistId){
        return appUserRepository.findById(artistId).orElseThrow().getArtistComments();
    }

    public ArtistComment get(long artistId, long commentId){
        ArtistComment artistComment = artistCommentRepository.getById(commentId);
        if(artistComment.getArtistId() != artistId){
            throw new IllegalArgumentException("Wrong artist ID!");
        }
        return artistComment;
    }

    public ArtistComment create(long artistId, ArtistComment artistComment){
        AppUser artist = appUserRepository.getById(artistId);
        artist.addArtistComment(artistComment);
        artistCommentRepository.save(artistComment);
        return artistComment;
    }

    public ArtistComment modify(long artistId, long commentId, ArtistComment newData){
        ArtistComment artistCommentFromDb = artistCommentRepository.getById(commentId);
        if(artistCommentFromDb.getArtistId() != artistId){
            throw new IllegalArgumentException("Wrong artist ID!");
        }
        artistCommentFromDb.modify(newData);
        artistCommentRepository.save(artistCommentFromDb);
        return artistCommentFromDb;
    }

    public void delete(long artistId, long commentId){
        ArtistComment artistCommentFromDb = artistCommentRepository.getById(commentId);
        if(artistCommentFromDb.getArtistId() != artistId){
            throw new IllegalArgumentException("Wrong artist ID!");
        }
        artistCommentRepository.delete(artistCommentFromDb);
    }
}