package com.example.zadyszke.wishlist;

import com.example.zadyszke.wishlist.dto.WishlistCreateDTO;
import com.example.zadyszke.wishlist.dto.WishlistGetDTO;
import com.example.zadyszke.wishlist.dto.WishlistModifyDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class WishlistController {
    private final WishlistService service;

    @Autowired
    public WishlistController(WishlistService service) {
        this.service = service;
    }

    @GetMapping("/wishlists")
    public List<WishlistGetDTO> get(){
        return service.getAll().stream()
                .map(WishlistGetDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/wishlists/{id}")
    public WishlistGetDTO get(@PathVariable long id){
        return WishlistGetDTO.of(service.get(id));
    }

    @PostMapping("/wishlists")
    public void create(@RequestBody WishlistCreateDTO wishlist){
        service.create(wishlist);
    }

    @PutMapping("/wishlists/{id}")
    public void modify(@PathVariable long id, @RequestBody WishlistModifyDTO wishlist){
        service.update(id, wishlist);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/wishlists/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }

    @GetMapping("/wishlists/user/{user_id}")
    public WishlistGetDTO getWishlistForUser(@PathVariable long user_id){
        return WishlistGetDTO.of(service.getWishlistForUser(user_id));
    }
}
