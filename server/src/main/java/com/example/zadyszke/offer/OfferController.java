package com.example.zadyszke.offer;

import com.example.zadyszke.offer.dto.OfferCreateDTO;
import com.example.zadyszke.offer.dto.OfferGetDTO;
import com.example.zadyszke.offer.dto.OfferModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
public class OfferController {

    private final OfferService service;

    @Autowired
    public OfferController(OfferService service) {
        this.service = service;
    }

    @GetMapping("/offers")
    public List<OfferGetDTO> get(){
        return service.getAll().stream()
                .map(OfferGetDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/offers/{id}")
    public OfferGetDTO get(@PathVariable long id){
        return OfferGetDTO.of(service.get(id));
    }

    @PostMapping("/offers")
    public OfferGetDTO create(@RequestBody OfferCreateDTO offer){
        Offer createdOffer = service.create(offer);
        return OfferGetDTO.of(createdOffer);
    }

    @PutMapping("/offers/{id}")
    public void modify(@PathVariable long id, @RequestBody OfferModifyDTO offer){
        service.update(id, offer);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/offers/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }
}