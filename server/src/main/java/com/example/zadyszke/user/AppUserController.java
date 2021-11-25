package com.example.zadyszke.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class AppUserController {
    private final AppUserService service;

    @Autowired
    public AppUserController(AppUserService service) {
        this.service = service;
    }

    @GetMapping("/users")
    public List<AppUserDTO> get() {
        return service.getAll().stream()
                .map(AppUserDTO::of)
                .collect(Collectors.toList());
    }

    @GetMapping("/users/{id}")
    public AppUserDTO get(@PathVariable long id) {
        return AppUserDTO.of(service.getById(id));
    }

    @PostMapping("/users/validate-login")
    public boolean validateLogin(@RequestBody AppUser userLoginDetails) {
        return service.validatePassword(userLoginDetails.getEmail(), userLoginDetails.getPassword());
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users")
    public void create(@RequestBody AppUser user) {
        if (service.getByEmail(user.getEmail()) != null) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "This email account is already registered on our site");
        } else {
            addUserToDatabase(user);
        }
    }

    @PutMapping("/users/{id}")
    public void modify(@PathVariable long id, @RequestBody AppUser user) {
        service.update(id, user);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable long id) {
        service.delete(id);
    }

    private void addUserToDatabase(AppUser user) {
        user.setRegisteredTime(LocalDateTime.now());
        service.create(user);
    }
}
