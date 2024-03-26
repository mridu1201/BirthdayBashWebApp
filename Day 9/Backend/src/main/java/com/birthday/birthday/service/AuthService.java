package com.birthday.birthday.service;

import com.birthday.birthday.dto.request.AuthenticationRequest;
import com.birthday.birthday.dto.request.RegisterRequest;
import com.birthday.birthday.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);
    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
