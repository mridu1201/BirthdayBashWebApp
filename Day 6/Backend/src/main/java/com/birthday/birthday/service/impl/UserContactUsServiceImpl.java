package com.birthday.birthday.service.impl;

import org.springframework.stereotype.Service;

import com.birthday.birthday.dto.request.UserContactUsRequest;
import com.birthday.birthday.dto.response.UserContactUsResponse;
import com.birthday.birthday.model.UserContactUs;
import com.birthday.birthday.service.UserContactUsService;
import com.birthday.birthday.repo.UserContactUsRepo;

@Service
public class UserContactUsServiceImpl implements UserContactUsService {

    private final UserContactUsRepo userContactRepository;

    public UserContactUsServiceImpl(UserContactUsRepo userContactRepository) {
        this.userContactRepository = userContactRepository;
    }

    @Override
    public UserContactUsResponse saveUserContact(UserContactUsRequest request) {
        UserContactUs userContact = new UserContactUs();
        userContact.setFirstname(request.getFirstname());
        userContact.setEmailid(request.getEmailid());
        userContact.setMobile(request.getMobile());
        userContact.setSubject(request.getSubject());
        userContact.setQuery(request.getQuery());
        
        userContact = userContactRepository.save(userContact);

        UserContactUsResponse response = new UserContactUsResponse();
        response.setId(userContact.getId());
        response.setFirstname(userContact.getFirstname());
        response.setEmailid(userContact.getEmailid());
        response.setMobile(userContact.getMobile());
        response.setSubject(userContact.getSubject());
        response.setQuery(userContact.getQuery());

        return response;
    }
}