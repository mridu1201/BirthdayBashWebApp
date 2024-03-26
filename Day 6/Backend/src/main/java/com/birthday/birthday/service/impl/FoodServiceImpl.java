package com.birthday.birthday.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.birthday.birthday.dto.request.FoodRequest;
import com.birthday.birthday.dto.response.FoodResponse;
import com.birthday.birthday.model.Food;
import com.birthday.birthday.repo.FoodRepo;
import com.birthday.birthday.service.FoodService;

@Service
public class FoodServiceImpl implements FoodService {

    @Autowired
    private FoodRepo foodRepository;

    @Override
    public List<FoodResponse> getAllFood() {
        List<Food> food = foodRepository.findAll();
        return food.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public FoodResponse getFood(Long fid) {
        Food food = foodRepository.findById(fid)
                .orElseThrow(() -> new RuntimeException("Food not found with id: " + fid));
        return convertToResponse(food);
    }

    @Override
    public FoodResponse createFood(FoodRequest request) {    
        Food food = new Food();
        BeanUtils.copyProperties(request, food);
        Food savedFood = foodRepository.save(food);
        return convertToResponse(savedFood);
    }
    

    @Override
    public FoodResponse updateFood(FoodRequest request, Long fid) {
        Food food = foodRepository.findById(fid)
                .orElseThrow(() -> new RuntimeException("Food not found with id: " + fid));
        BeanUtils.copyProperties(request, food);
        Food updatedFood = foodRepository.save(food);
        return convertToResponse(updatedFood);
    }

    @Override
    public boolean deleteFood(Long fid) {
        if (foodRepository.existsById(fid)) {
            foodRepository.deleteById(fid);
            return true;
        }
        return false;
    }

    private FoodResponse convertToResponse(Food food) {
        FoodResponse response = new FoodResponse();
        BeanUtils.copyProperties(food, response);
        return response;
    }
}
