package com.example.zadyszke.offer;

import com.example.zadyszke.offer.OfferDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
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
    public void create(@RequestBody Offer offer){
        offer.setCreationDate(LocalDateTime.now());
        service.create(offer);
    }

    @PutMapping("/offers/{id}")
    public void modify(@PathVariable long id, @RequestBody Offer offer){
        service.update(id, offer);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/offers/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }
}