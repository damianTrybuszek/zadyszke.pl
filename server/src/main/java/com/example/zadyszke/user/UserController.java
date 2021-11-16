package com.example.zadyszke.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class UserController {
    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/users")
    public List<User> get(){
        return service.getAll();
    }

    @GetMapping("/users/{id}")
    public User get(@PathVariable long id){
        return service.get(id);
    }

    @PostMapping("/users")
    public void create(@RequestBody User user){
        user.setRegisteredTime(LocalDateTime.now());
        service.create(user);
    }

    @PutMapping("/users/{id}")
    public void modify(@PathVariable long id, @RequestBody User user){
        service.update(id, user);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable long id){
        service.delete(id);
    }
}
