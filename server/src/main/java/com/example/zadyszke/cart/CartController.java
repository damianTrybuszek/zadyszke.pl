package com.example.zadyszke.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CartController {
    private final CartService service;

    @Autowired
    public CartController(CartService service) {
        this.service = service;
    }

    @GetMapping("/carts")
    public List<Cart> get(){
        return service.getAll();
    }

    @GetMapping("/carts/{id}")
    public Cart get(@PathVariable long id){
        return service.get(id);
    }

    @PostMapping("/carts")
    public void create(@RequestBody Cart cart){
        cart.setLastModifiedDate(LocalDateTime.now());
        service.create(cart);
    }

    @PutMapping("/carts/{id}")
    public void modify(@PathVariable long id, @RequestBody Cart cart){
        service.update(id, cart);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/carts/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }

    @GetMapping("/carts/user/{user_id}")
    public Cart getCartForUser(@PathVariable long user_id){
        return service.getCartForUser(user_id);
    }
}
