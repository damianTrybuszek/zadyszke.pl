package com.example.zadyszke.artist;

import com.example.zadyszke.artist.dto.AppArtistCreateDTO;
import com.example.zadyszke.artist.dto.AppArtistGetDTO;
import com.example.zadyszke.artist.dto.AppArtistModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ArtistController {
    private final ArtistService service;

    @Autowired
    public ArtistController(ArtistService service) {
        this.service = service;
    }

    @GetMapping("/artists")
    public List<AppArtistGetDTO> get(){
        return service.getAll().stream()
                .map(AppArtistGetDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/artists/{id}")
    public AppArtistGetDTO get(@PathVariable long id){
        return AppArtistGetDTO.of(service.get(id));
    }

    @PostMapping("/artists")
    public void create(@RequestBody AppArtistCreateDTO artist) {
        service.create(artist);
    }

    @PutMapping("/artists/{id}")
    public void modify(@PathVariable long id, @RequestBody AppArtistModifyDTO artist){
        service.update(id, artist);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/artists/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }
}
