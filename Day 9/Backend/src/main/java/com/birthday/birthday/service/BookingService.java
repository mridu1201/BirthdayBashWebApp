package com.birthday.birthday.service;

import java.util.List;

import com.birthday.birthday.dto.request.BookingRequest;
import com.birthday.birthday.dto.response.BookingResponse;

public interface BookingService {
    public List<BookingResponse> getAllBookings();

    public BookingResponse getBookingById(Long id);

    public BookingResponse createBooking(BookingRequest request);

    public BookingResponse updateBooking(Long id, BookingRequest request);

    public boolean deleteBooking(Long id);
}
