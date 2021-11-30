package com.example.zadyszke.payment;

import com.example.zadyszke.payment.dto.PaymentCreateDTO;
import com.example.zadyszke.payment.dto.PaymentModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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

    public void create(PaymentCreateDTO payment){
        Payment createdPayment = payment.toPayment();
        createdPayment.setRegisteredTime(LocalDateTime.now());
        createdPayment.setSuccessful(false);
        this.repository.save(createdPayment);
    }

    public void markComplete(long id, PaymentModifyDTO payment){
        Payment updatedPayment = get(id);
        updatedPayment.modify(payment);
        this.repository.save(updatedPayment);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }
}
