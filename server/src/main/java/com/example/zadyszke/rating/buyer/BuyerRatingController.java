package com.example.zadyszke.rating.buyer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
class BuyerRatingController {

    private final BuyerRatingService service;

    @Autowired
    public BuyerRatingController(BuyerRatingService service) {
        this.service = service;
    }


    @GetMapping("/buyer/rating")
    public List<BuyerRatingDTO> getAll() {
        return service.getAll()
                .stream()
                .map(BuyerRatingDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/buyer/{appUserId}/rating")
    public List<BuyerRatingDTO> get(@PathVariable long appUserId){
        return service.get(appUserId)
                .stream()
                .map(BuyerRatingDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/buyer/{appUserId}/rating/{rateId}")
    public BuyerRatingDTO get(@PathVariable long appUserId, @PathVariable long rateId){
        return BuyerRatingDTO.of(service.get(appUserId, rateId));
    }

    @PostMapping("/buyer/{appUserId}/rating")
    public BuyerRatingDTO create(@PathVariable long appUserId, @RequestBody BuyerRatingDTO dto){
        return BuyerRatingDTO.of(service.create(appUserId, dto.toComment()));
    }

    @PutMapping("/buyer/{appUserId}/rating/{rateId}")
    public BuyerRatingDTO modify(@PathVariable long appUserId,
                                 @PathVariable long rateId,
                                 @RequestBody BuyerRatingDTO dto){
        return BuyerRatingDTO.of(service.modify(appUserId, rateId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/buyer/{appUserId}/rating/{rateId}")
    public void cancel(@PathVariable long appUserId, @PathVariable long commentId){
        service.delete(appUserId, commentId);
    }
}