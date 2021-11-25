package com.example.zadyszke.comment.offer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
class OfferCommentController {

    private final OfferCommentService service;

    @Autowired
    public OfferCommentController(OfferCommentService service) {
        this.service = service;
    }

    @GetMapping("/offers/{offerId}/comments")
    public List<OfferCommentDTO> get(@PathVariable long offerId){
        return service.get(offerId)
                .stream()
                .map(OfferCommentDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/offers/{offerId}/comments/{commentId}")
    public OfferCommentDTO get(@PathVariable long offerId, @PathVariable long commentId){
        return OfferCommentDTO.of(service.get(offerId, commentId));
    }

    @PostMapping("/offers/{offerId}/comments")
    public OfferCommentDTO create(@PathVariable long offerId, @RequestBody OfferCommentDTO dto){
        return OfferCommentDTO.of(service.create(offerId, dto.toComment()));
    }

    @PutMapping("/offers/{offerId}/comments/{commentId}")
    public OfferCommentDTO modify(@PathVariable long offerId,
                                  @PathVariable long commentId,
                                  @RequestBody OfferCommentDTO dto){
        return OfferCommentDTO.of(service.modify(offerId, commentId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/offers/{offerId}/comments/{commentId}")
    public void cancel(@PathVariable long offerId, @PathVariable long commentId){
        service.delete(offerId, commentId);
    }
}