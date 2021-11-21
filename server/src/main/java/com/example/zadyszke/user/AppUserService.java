package com.example.zadyszke.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserService {
    private final AppUserRepository repository;
    PasswordEncoder passwordEncoder;

    @Autowired
    public AppUserService(AppUserRepository repository) {
        this.repository = repository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public List<AppUser> getAll(){
        return this.repository.findAll();
    }

    public AppUser get(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public void create(AppUser user){
        String encodedPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        this.repository.save(user);
    }

    public void update(long id, AppUser user){
        AppUser updatedUser = get(id);
        updatedUser.modify(user);
        this.repository.save(updatedUser);
    }

    public void delete(long id){
        this.repository.delete(get(id));
    }

}
