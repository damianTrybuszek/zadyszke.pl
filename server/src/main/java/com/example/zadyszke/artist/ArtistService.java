package com.example.zadyszke.artist;

import com.example.zadyszke.artist.dto.AppArtistCreateDTO;
import com.example.zadyszke.artist.dto.AppArtistModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class ArtistService {

    private final ArtistRepository repository;

    @Autowired
    public ArtistService(ArtistRepository repository) {
        this.repository = repository;
    }

    public List<AppArtist> getAll(){
        return this.repository.findAll();
    }

    public AppArtist get(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public void create(AppArtistCreateDTO appArtist){
        AppArtist createdArtist = appArtist.toAppArtist();
        this.repository.save(createdArtist);
    }

    public void update(long id, AppArtistModifyDTO appArtist){
        AppArtist updatedAppArtist = get(id);
        updatedAppArtist.modify(appArtist);
        this.repository.save(updatedAppArtist);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }
}
