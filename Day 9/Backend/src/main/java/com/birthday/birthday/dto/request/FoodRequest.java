package com.birthday.birthday.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FoodRequest {
    private String fname;
    private String fprice;
    private String fcategory;
    private String fimg;
}
