package com.birthday.birthday.service;

import com.birthday.birthday.dto.request.UserContactUsRequest;
import com.birthday.birthday.dto.response.UserContactUsResponse;


public interface UserContactUsService {
    UserContactUsResponse saveUserContact(UserContactUsRequest request);

}
