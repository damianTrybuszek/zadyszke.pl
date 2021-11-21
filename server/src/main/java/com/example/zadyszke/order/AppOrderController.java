package com.example.zadyszke.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class AppOrderController {

    private final AppOrderService service;

    @Autowired
    public AppOrderController(AppOrderService service) {
        this.service = service;
    }

    @GetMapping("/orders")
    public List<AppOrderDTO> get() {
        return service.getAll().stream()
                .map(AppOrderDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/orders/{id}")
    public AppOrderDTO get(@PathVariable long id) {
        return AppOrderDTO.of(service.get(id));
    }

    @PostMapping("/orders")
    public void create(@RequestBody AppOrder appOrder) {
        appOrder.setOrderCreationTime(LocalDateTime.now());
        service.create(appOrder);
    }

    @PutMapping("/orders/{id}")
    public void modify(@PathVariable long id, @RequestBody AppOrder appOrder) {
        service.update(id, appOrder);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/orders/{id}")
    public void delete(@PathVariable long id) {
        service.delete(id);
    }
}
