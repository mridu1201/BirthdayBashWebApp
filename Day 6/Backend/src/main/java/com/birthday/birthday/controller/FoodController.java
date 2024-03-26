package com.birthday.birthday.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.birthday.constant.Api;
import com.birthday.birthday.dto.request.FoodRequest;
import com.birthday.birthday.dto.response.FoodResponse;
import com.birthday.birthday.service.FoodService;

@RestController
@RequestMapping(Api.FOOD)
public class FoodController {

    @Autowired
    private FoodService foodService;

    @GetMapping("/all")
    public ResponseEntity<List<FoodResponse>> getAllFood() {
        List<FoodResponse> food = foodService.getAllFood();
        return ResponseEntity.ok(food);
    }

    @GetMapping("/{fid}")
    public ResponseEntity<FoodResponse> getFood(@PathVariable Long fid) {
        FoodResponse food = foodService.getFood(fid);
        return ResponseEntity.ok(food);
    }

    @PostMapping("/add")
    public ResponseEntity<FoodResponse> createFood(@RequestBody FoodRequest request) {
        FoodResponse createdFood = foodService.createFood(request);
        return new ResponseEntity<>(createdFood, HttpStatus.CREATED);
    }

    @PutMapping("/{fid}")
    public ResponseEntity<FoodResponse> updateFood(@RequestBody FoodRequest request, @PathVariable Long fid) {
        FoodResponse updatedFood = foodService.updateFood(request, fid);
        return ResponseEntity.ok(updatedFood);
    }

    @DeleteMapping("/{fid}")
    public ResponseEntity<String> deleteFood(@PathVariable Long fid) {
        boolean deleted = foodService.deleteFood(fid);
        return deleted ? ResponseEntity.ok().body("Successfully deleted "+fid):ResponseEntity.notFound().build();
    }
}
