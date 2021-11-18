package com.example.zadyszke.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> getAll(){
        return this.repository.findAll();
    }

    public User get(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public void create(User user){
        this.repository.save(user);
    }

    public void update(long id, User user){
        User updatedUser = get(id);
        updatedUser.modify(user);
        this.repository.save(updatedUser);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }
}
