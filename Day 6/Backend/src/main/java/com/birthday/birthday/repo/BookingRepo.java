package com.birthday.birthday.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.birthday.model.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long>{
    
}