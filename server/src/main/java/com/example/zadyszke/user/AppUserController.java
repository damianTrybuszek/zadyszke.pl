package com.example.zadyszke.user;

import com.example.zadyszke.exception.InvalidIdException;
import com.example.zadyszke.user.dto.AppUserGetDTO;
import com.example.zadyszke.user.dto.AppUserLoginDTO;
import com.example.zadyszke.user.dto.AppUserModifyDTO;
import com.example.zadyszke.user.dto.AppUserRegisterDTO;
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
    public List<AppUserGetDTO> get() {
        return service.getAll().stream()
                .map(AppUserGetDTO::of)
                .collect(Collectors.toList());
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/users/{id}")
    public AppUserGetDTO get(@PathVariable long id) {
        try {
            return AppUserGetDTO.of(service.getById(id));
        } catch (Exception e) {
            throw new InvalidIdException(id);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/users/validate-login")
    public boolean validateLogin(@RequestBody AppUserLoginDTO userLoginDetails) {
        return service.validatePassword(userLoginDetails.getEmail(), userLoginDetails.getPassword());
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/users")
    public void create(@RequestBody AppUserRegisterDTO user) {
        if (service.getByEmail(user.getEmail()) != null) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "This email account is already registered on our site");
        } else {
            addUserToDatabase(user);
        }
    }

    @PutMapping("/users/{id}")
    public void modify(@PathVariable long id, @RequestBody AppUserModifyDTO user) {
        service.update(id, user);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/users/{id}")
    public void delete(@PathVariable long id) {
        service.delete(id);
    }

    private void addUserToDatabase(AppUserRegisterDTO user) {
        user.setRegisteredTime(LocalDateTime.now());
        service.create(user);
    }
}
