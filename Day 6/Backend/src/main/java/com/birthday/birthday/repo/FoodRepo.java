package com.birthday.birthday.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.birthday.model.Food;

@Repository
public interface FoodRepo extends JpaRepository<Food, Long>{
    
}
