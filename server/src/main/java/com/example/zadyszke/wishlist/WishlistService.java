package com.example.zadyszke.wishlist;

import com.example.zadyszke.wishlist.dto.WishlistCreateDTO;
import com.example.zadyszke.wishlist.dto.WishlistModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class WishlistService {
    private final WishlistRepository repository;

    @Autowired
    public WishlistService(WishlistRepository repository) {
        this.repository = repository;
    }

    public List<Wishlist> getAll(){
        return this.repository.findAll();
    }

    public Wishlist get(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public Wishlist getWishlistForUser(long userId){
        return this.repository.findByWishlistOwner_Id(userId);
    }

    public void create(WishlistCreateDTO wishlist){
        Wishlist savedWishlist = wishlist.toWishlist();
        savedWishlist.setLastModifiedDate(LocalDateTime.now());
        this.repository.save(savedWishlist);
    }

    public void update(long id, WishlistModifyDTO wishlist){
        Wishlist updatedWishlist = get(id);
        updatedWishlist.modify(wishlist);
        this.repository.save(updatedWishlist);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }
}
