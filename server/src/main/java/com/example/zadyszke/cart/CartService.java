package com.example.zadyszke.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    private final CartRepository repository;

    @Autowired
    public CartService(CartRepository repository) {
        this.repository = repository;
    }

    public List<Cart> getAll(){
        return this.repository.findAll();
    }

    public Cart get(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public Cart getCartForUser(long userId){
        return this.repository.findByCartOwner_Id(userId);
    }

    public void create(Cart cart){
        this.repository.save(cart);
    }

    public void update(long id, Cart cart){
        Cart updatedCart = get(id);
        updatedCart.modify(cart);
        this.repository.save(updatedCart);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }
}
