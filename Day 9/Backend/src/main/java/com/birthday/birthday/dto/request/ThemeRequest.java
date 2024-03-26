package com.birthday.birthday.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ThemeRequest {
    private String tname;
    private String tdescription;
    private String tperson;
    private int tnumbers;
    private int tprice;
}