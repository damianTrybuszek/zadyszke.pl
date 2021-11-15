package com.example.zadyszke.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
class CommentController {

    private final CommentService service;

    @Autowired
    public CommentController(CommentService service) {
        this.service = service;
    }

    @GetMapping("/offers/{offerId}/comments")
    public List<CommentDTO> get(@PathVariable long offerId){
        return service.get(offerId)
                .stream()
                .map(CommentDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/offers/{offerId}/comments/{commentId}")
    public CommentDTO get(@PathVariable long offerId, @PathVariable long commentId){
        return CommentDTO.of(service.get(offerId, commentId));
    }

    @PostMapping("/offers/{offerd}/comments")
    public CommentDTO create(@PathVariable long offerd, @RequestBody CommentDTO dto){
        return CommentDTO.of(service.create(offerd, dto.toComment()));
    }

    @PutMapping("/offers/{offerId}/comments/{commentId}")
    public CommentDTO modify(@PathVariable long offerId,
                             @PathVariable long commentId,
                             @RequestBody CommentDTO dto){
        return CommentDTO.of(service.modify(offerId, commentId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/offers/{offerId}/comments/{commentId}")
    public void cancel(@PathVariable long offerId, @PathVariable long commentId){
        service.delete(offerId, commentId);
    }
}