package com.birthday.birthday.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.birthday.constant.Api;
import com.birthday.birthday.dto.request.UserContactUsRequest;
import com.birthday.birthday.dto.response.UserContactUsResponse;
// import com.birthday.birthday.service.UserContactUsService;
import com.birthday.birthday.service.impl.UserContactUsServiceImpl;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

    // UserContactController.java
@RestController
@RequestMapping(Api.CONTACT)
public class UserContactUsController {

    private final UserContactUsServiceImpl userContactService;

    public UserContactUsController(UserContactUsServiceImpl userContactService) {
        this.userContactService = userContactService;
    }

    @PostMapping("/submit")
    public ResponseEntity<UserContactUsResponse> submitContactForm(@RequestBody UserContactUsRequest request) {
        UserContactUsResponse response = userContactService.saveUserContact(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}

