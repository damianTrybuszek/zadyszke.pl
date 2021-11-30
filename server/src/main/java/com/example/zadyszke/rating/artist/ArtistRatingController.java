package com.example.zadyszke.rating.artist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
class ArtistRatingController {

    private final ArtistRatingService service;

    @Autowired
    public ArtistRatingController(ArtistRatingService service) {
        this.service = service;
    }

    @GetMapping("/artist/rating")
    public List<ArtistRatingDTO> get(){
        return service.getAll()
                .stream()
                .map(ArtistRatingDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/artist/{artistId}/rating")
    public List<ArtistRatingDTO> get(@PathVariable long artistId){
        return service.get(artistId)
                .stream()
                .map(ArtistRatingDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/artist/{artistId}/rating/{rateId}")
    public ArtistRatingDTO get(@PathVariable long artistId, @PathVariable long rateId){
        return ArtistRatingDTO.of(service.get(artistId, rateId));
    }

    @PostMapping("/artist/{artistId}/rating")
    public ArtistRatingDTO create(@PathVariable long artistId, @RequestBody ArtistRatingDTO dto){
        return ArtistRatingDTO.of(service.create(artistId, dto.toComment()));
    }

    @PutMapping("/artist/{artistId}/rating/{rateId}")
    public ArtistRatingDTO modify(@PathVariable long artistId,
                                  @PathVariable long rateId,
                                  @RequestBody ArtistRatingDTO dto){
        return ArtistRatingDTO.of(service.modify(artistId, rateId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/artist/{artistId}/rating/{rateId}")
    public void cancel(@PathVariable long artistId, @PathVariable long rateId){
        service.delete(artistId, rateId);
    }
}