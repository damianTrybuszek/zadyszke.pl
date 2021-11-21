package com.example.zadyszke.payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class PaymentController {
    private final PaymentService service;

    @Autowired
    public PaymentController(PaymentService service) {
        this.service = service;
    }

    @GetMapping("/payments")
    public List<PaymentDTO> get(){
        return service.getAll().stream()
                .map(PaymentDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/payments/{id}")
    public PaymentDTO get(@PathVariable long id){
        return PaymentDTO.of(service.get(id));
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
