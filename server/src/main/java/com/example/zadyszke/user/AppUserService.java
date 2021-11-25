package com.example.zadyszke.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
public class AppUserService {
    private final AppUserRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AppUserService(AppUserRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<AppUser> getAll(){
        return this.repository.findAll();
    }

    public AppUser getById(long id){
        return this.repository.findById(id).orElseThrow();
    }

    public AppUser getByEmail(String email){
        return this.repository.findByEmail(email);
    }

    public void create(AppUser user){
        user.setEmail(user.getEmail().toLowerCase());
        String encodedPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        this.repository.save(user);
    }

    public void update(long id, AppUser user){
        AppUser updatedUser = getById(id);
        updatedUser.modify(user);
        this.repository.save(updatedUser);
    }

    public void delete(long id){
        this.repository.delete(getById(id));
    }

    public boolean validatePassword(String email, String password){
        Optional<AppUser> user = Optional.ofNullable(getByEmail(email.toLowerCase()));
        if(user.isPresent()){
            return passwordEncoder.matches(password, user.get().getPassword());
        } else {
            throw new IllegalArgumentException("No user found with given email");
        }
    }

}
