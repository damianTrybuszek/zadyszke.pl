package com.example.zadyszke.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class WishlistController {
    private final WishlistService service;

    @Autowired
    public WishlistController(WishlistService service) {
        this.service = service;
    }

    @GetMapping("/wishlists")
    public List<WishlistDTO> get(){
        return service.getAll().stream()
                .map(WishlistDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/wishlists/{id}")
    public WishlistDTO get(@PathVariable long id){
        return WishlistDTO.of(service.get(id));
    }

    @PostMapping("/wishlists")
    public void create(@RequestBody Wishlist wishlist){
        wishlist.setLastModifiedDate(LocalDateTime.now());
        service.create(wishlist);
    }

    @PutMapping("/wishlists/{id}")
    public void modify(@PathVariable long id, @RequestBody Wishlist wishlist){
        service.update(id, wishlist);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/wishlists/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }

    @GetMapping("/wishlists/user/{user_id}")
    public WishlistDTO getWishlistForUser(@PathVariable long user_id){
        return WishlistDTO.of(service.getWishlistForUser(user_id));
    }
}
