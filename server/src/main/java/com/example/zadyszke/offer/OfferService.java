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

    public Offer create(Offer offer){
        return repository.save(offer);
    }

    public Offer update(long id, Offer offer){
        Offer offerFromDb = get(id);
        offerFromDb.setTitle(offer.getTitle());
        return repository.save(offerFromDb);
    }

    public void delete(long id){
        repository.delete(get(id));
    }

}