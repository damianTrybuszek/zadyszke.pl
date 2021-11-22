package com.example.zadyszke.order;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class AppOrderService {

    private final AppOrderRepository repository;

    @Autowired
    public AppOrderService(AppOrderRepository repository) {
        this.repository = repository;
    }

    public List<AppOrder> getAll(){
        return this.repository.findAll();
    }

    public AppOrder get(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public void create(AppOrder appOrder){
        this.repository.save(appOrder);
    }

    public void update(long id, AppOrder appOrder){
        AppOrder updatedAppOrder = get(id);
        updatedAppOrder.modify(appOrder);
        this.repository.save(updatedAppOrder);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }
}
