package com.example.zadyszke.rating.offer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
class OfferRatingController {

    private final OfferRatingService service;

    @Autowired
    public OfferRatingController(OfferRatingService service) {
        this.service = service;
    }



    @GetMapping("/offers/rating")
    public List<OfferRatingDTO> getAll(){
        return service.getAll()
                .stream()
                .map(OfferRatingDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/offers/{offerId}/rating")
    public List<OfferRatingDTO> get(@PathVariable long offerId){
        return service.get(offerId)
                .stream()
                .map(OfferRatingDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/offers/{offerId}/rating/{rateId}")
    public OfferRatingDTO get(@PathVariable long offerId, @PathVariable long rateId){
        return OfferRatingDTO.of(service.get(offerId, rateId));
    }

    @PostMapping("/offers/{offerId}/rating")
    public OfferRatingDTO create(@PathVariable long offerId, @RequestBody OfferRatingDTO dto){
        return OfferRatingDTO.of(service.create(offerId, dto.toComment()));
    }

    @PutMapping("/offers/{offerId}/rating/{rateId}")
    public OfferRatingDTO modify(@PathVariable long offerId,
                                 @PathVariable long rateId,
                                 @RequestBody OfferRatingDTO dto){
        return OfferRatingDTO.of(service.modify(offerId, rateId, dto.toComment()));
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/offers/{offerId}/comments/{commentId}")
    public void cancel(@PathVariable long offerId, @PathVariable long commentId){
        service.delete(offerId, commentId);
    }
}