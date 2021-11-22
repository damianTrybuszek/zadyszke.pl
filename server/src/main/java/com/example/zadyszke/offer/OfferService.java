package com.example.zadyszke.offer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void create(Offer offer){
        repository.save(offer);
    }

    public void update(long id, Offer newOfferData){
        Offer modifiedOffer = get(id);
        modifiedOffer.modify(newOfferData);
        repository.save(modifiedOffer);
    }

    public void delete(long id){
        repository.delete(get(id));
    }

}