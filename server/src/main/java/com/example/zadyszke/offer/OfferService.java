package com.example.zadyszke.offer;

import com.example.zadyszke.offer.dto.OfferCreateDTO;
import com.example.zadyszke.offer.dto.OfferModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
class OfferService {

    private final OfferRepository repository;

    @Autowired
    public OfferService(OfferRepository repository) {
        this.repository = repository;
    }

    public List<Offer> getAll(){
        return repository.findAll();
    }

    public Offer get(long id){
        return repository.findById(id).orElseThrow();
    }

    public Offer create(OfferCreateDTO offer){
        Offer createdOffer = offer.toOffer();
        createdOffer.setCreationDate(LocalDateTime.now());
        repository.save(createdOffer);
        return createdOffer;
    }

    public void update(long id, OfferModifyDTO offer){
        Offer modifiedOffer = get(id);
        modifiedOffer.modify(offer);
        repository.save(modifiedOffer);
    }

    public void delete(long id){
        repository.delete(get(id));
    }

}