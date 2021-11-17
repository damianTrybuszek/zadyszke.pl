package com.example.zadyszke.comment.ArtistComment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
class ArtistCommentController {

    private final ArtistCommentService service;

    @Autowired
    public ArtistCommentController(ArtistCommentService service) {
        this.service = service;
    }

    @GetMapping("/offers/{offerId}/comments")
    public List<ArtistCommentDTO> get(@PathVariable long offerId){
        return service.get(offerId)
                .stream()
                .map(ArtistCommentDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/offers/{offerId}/comments/{commentId}")
    public ArtistCommentDTO get(@PathVariable long offerId, @PathVariable long commentId){
        return ArtistCommentDTO.of(service.get(offerId, commentId));
    }

    @PostMapping("/offers/{offerId}/comments")
    public ArtistCommentDTO create(@PathVariable long offerId, @RequestBody ArtistCommentDTO dto){
        return ArtistCommentDTO.of(service.create(offerId, dto.toComment()));
    }

    @PutMapping("/offers/{offerId}/comments/{commentId}")
    public ArtistCommentDTO modify(@PathVariable long offerId,
                                   @PathVariable long commentId,
                                   @RequestBody ArtistCommentDTO dto){
        return ArtistCommentDTO.of(service.modify(offerId, commentId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/offers/{offerId}/comments/{commentId}")
    public void cancel(@PathVariable long offerId, @PathVariable long commentId){
        service.delete(offerId, commentId);
    }
}