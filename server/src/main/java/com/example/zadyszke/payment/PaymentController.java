package com.example.zadyszke.payment;

import com.example.zadyszke.payment.dto.PaymentCreateDTO;
import com.example.zadyszke.payment.dto.PaymentGetDTO;
import com.example.zadyszke.payment.dto.PaymentModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class PaymentController {
    private final PaymentService service;

    @Autowired
    public PaymentController(PaymentService service) {
        this.service = service;
    }

    @GetMapping("/payments")
    public List<PaymentGetDTO> get(){
        return service.getAll().stream()
                .map(PaymentGetDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/payments/{id}")
    public PaymentGetDTO get(@PathVariable long id){
        return PaymentGetDTO.of(service.get(id));
    }

    @PostMapping("/payments")
    public void create(@RequestBody PaymentCreateDTO payment){
        service.create(payment);
    }

    @PutMapping("/payments/{id}")
    public void modify(@PathVariable long id, @RequestBody PaymentModifyDTO payment){
        service.markComplete(id, payment);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/payments/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }
}
