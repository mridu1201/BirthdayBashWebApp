package com.birthday.birthday.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FoodResponse {
    private Long fid;
    private String fname;
    private String fprice;
    private String fcategory;
    private String fimg;
}
