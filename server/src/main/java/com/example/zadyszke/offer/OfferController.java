package com.example.zadyszke.offer;

import com.example.zadyszke.offer.OfferDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class OfferController {

    private final OfferService service;

    @Autowired
    public OfferController(OfferService service) {
        this.service = service;
    }

    @GetMapping("/offers")
    public List<OfferDTO> get(){
        return service.getAll().stream()
                .map(OfferDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/offers/{id}")
    public OfferDTO get(@PathVariable long id){
        return OfferDTO.of(service.get(id));
    }

    @PostMapping("/offers")
    public OfferDTO create(@RequestBody OfferDTO dto){
        return OfferDTO.of(service.create(dto.toOffer()));
    }

    @PutMapping("/offers/{id}")
    public OfferDTO modify(@PathVariable long id, @RequestBody OfferDTO dto){
        Offer article = service.update(id, dto.toOffer());
        return OfferDTO.of(article);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/offers/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }
}