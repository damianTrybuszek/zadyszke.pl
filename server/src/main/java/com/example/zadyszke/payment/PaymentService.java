package com.example.zadyszke.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {
    private final PaymentRepository repository;

    @Autowired
    public PaymentService(PaymentRepository repository) {
        this.repository = repository;
    }

    public List<Payment> getAll(){
        return this.repository.findAll();
    }

    public Payment get(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public void create(Payment payment){
        this.repository.save(payment);
    }

    public void markComplete(long id, Payment payment){
        Payment updatedPayment = get(id);
        updatedPayment.modify(payment);
        this.repository.save(updatedPayment);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }
}
