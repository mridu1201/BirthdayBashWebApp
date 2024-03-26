package com.birthday.birthday.service;

import java.util.List;

import com.birthday.birthday.dto.request.FoodRequest;
import com.birthday.birthday.dto.response.FoodResponse;

public interface FoodService {

    List<FoodResponse> getAllFood();

    FoodResponse getFood(Long fid);

    FoodResponse createFood(FoodRequest request);

    FoodResponse updateFood(FoodRequest request, Long fid);

    boolean deleteFood(Long fid);
}
