package com.birthday.birthday.service;

import com.birthday.birthday.dto.request.UserRequest;
import com.birthday.birthday.dto.response.UserResponse;
import com.birthday.birthday.model.enumerate.Role;

import java.util.List;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteUser(Long uid);

    public List<UserResponse> getAdminUsers();

    public List<UserResponse> getCustomerUsers();

    public Role getUserRole(Long uid);

}

