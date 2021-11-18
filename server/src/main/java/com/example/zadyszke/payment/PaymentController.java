package com.example.zadyszke.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PaymentController {
    private final PaymentService service;

    @Autowired
    public PaymentController(PaymentService service) {
        this.service = service;
    }

    @GetMapping("/payments")
    public List<Payment> get(){
        return service.getAll();
    }

    @GetMapping("/payments/{id}")
    public Payment get(@PathVariable long id){
        return service.get(id);
    }

    @PostMapping("/payments")
    public void create(@RequestBody Payment payment){
        payment.setRegisteredTime(LocalDateTime.now());
        service.create(payment);
    }

    @PutMapping("/payments/{id}")
    public void modify(@PathVariable long id, @RequestBody Payment payment){
        service.markComplete(id, payment);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/payments/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }
}
