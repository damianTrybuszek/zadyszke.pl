package com.example.zadyszke.comment.buyer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
class BuyerCommentController {

    private final BuyerCommentService service;

    @Autowired
    public BuyerCommentController(BuyerCommentService service) {
        this.service = service;
    }

    @GetMapping("/appuser/{appUserId}/comments")
    public List<BuyerCommentDTO> get(@PathVariable long appUserId){
        return service.get(appUserId)
                .stream()
                .map(BuyerCommentDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/appuser/{appUserId}/comments/{commentId}")
    public BuyerCommentDTO get(@PathVariable long appUserId, @PathVariable long commentId){
        return BuyerCommentDTO.of(service.get(appUserId, commentId));
    }

    @PostMapping("/appuser/{appUserId}/comments")
    public BuyerCommentDTO create(@PathVariable long appUserId, @RequestBody BuyerCommentDTO dto){
        return BuyerCommentDTO.of(service.create(appUserId, dto.toComment()));
    }

    @PutMapping("/appuser/{appUserId}/comments/{commentId}")
    public BuyerCommentDTO modify(@PathVariable long appUserId,
                                  @PathVariable long commentId,
                                  @RequestBody BuyerCommentDTO dto){
        return BuyerCommentDTO.of(service.modify(appUserId, commentId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/appuser/{appUserId}/comments/{commentId}")
    public void cancel(@PathVariable long appUserId, @PathVariable long commentId){
        service.delete(appUserId, commentId);
    }
}