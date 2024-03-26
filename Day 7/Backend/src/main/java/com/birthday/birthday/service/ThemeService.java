package com.birthday.birthday.service;

import com.birthday.birthday.dto.request.ThemeRequest;
import com.birthday.birthday.dto.response.ThemeResponse;

import java.util.List;

public interface ThemeService {

    List<ThemeResponse> getAllThemes();

    ThemeResponse getTheme(Long tid);

    ThemeResponse createTheme(ThemeRequest request);

    ThemeResponse updateTheme(ThemeRequest request, Long tid);

    boolean deleteTheme(Long tid);

}
