package com.example.zadyszke.exception;

import lombok.*;

@Getter
public class InvalidIdException extends RuntimeException {
    private long id;

    public InvalidIdException(long id) {
        this.id = id;
    }
}
