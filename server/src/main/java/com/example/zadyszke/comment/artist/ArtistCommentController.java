package com.example.zadyszke.comment.artist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
class ArtistCommentController {

    private final ArtistCommentService service;

    @Autowired
    public ArtistCommentController(ArtistCommentService service) {
        this.service = service;
    }

    @GetMapping("/artist/comments")
    public List<ArtistCommentDTO> get(){
        return service.getAll()
                .stream()
                .map(ArtistCommentDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/artist/{artistId}/comments")
    public List<ArtistCommentDTO> get(@PathVariable long artistId){
        return service.get(artistId)
                .stream()
                .map(ArtistCommentDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/artist/{artistId}/comments/{commentId}")
    public ArtistCommentDTO get(@PathVariable long artistId, @PathVariable long commentId){
        return ArtistCommentDTO.of(service.get(artistId, commentId));
    }

    @PostMapping("/artist/{artistId}/comments")
    public ArtistCommentDTO create(@PathVariable long artistId, @RequestBody ArtistCommentDTO dto){
        return ArtistCommentDTO.of(service.create(artistId, dto.toComment()));
    }

    @PutMapping("/artist/{artistId}/comments/{commentId}")
    public ArtistCommentDTO modify(@PathVariable long artistId,
                                   @PathVariable long commentId,
                                   @RequestBody ArtistCommentDTO dto){
        return ArtistCommentDTO.of(service.modify(artistId, commentId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/artist/{artistId}/comments/{commentId}")
    public void cancel(@PathVariable long artistId, @PathVariable long commentId){
        service.delete(artistId, commentId);
    }
}