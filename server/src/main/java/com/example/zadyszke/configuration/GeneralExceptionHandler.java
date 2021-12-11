package com.example.zadyszke.configuration;

import com.example.zadyszke.exception.InvalidIdException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GeneralExceptionHandler {
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGeneralException(Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Your request could not be completed. Please try again in a few minutes.");
    }

    @ExceptionHandler(InvalidIdException.class)
    public ResponseEntity<String> handleInvalidIdException(InvalidIdException e) {
        e.printStackTrace();
        String errorMessage = "Could not find record with ID: " + e.getId();
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
    }
}
