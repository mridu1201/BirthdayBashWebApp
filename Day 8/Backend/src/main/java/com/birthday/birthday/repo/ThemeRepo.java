package com.birthday.birthday.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthday.birthday.model.Theme;

public interface ThemeRepo extends JpaRepository<Theme,Long> {
    
}
