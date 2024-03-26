package com.birthday.birthday.service.impl;

import com.birthday.birthday.dto.request.ThemeRequest;
import com.birthday.birthday.dto.response.ThemeResponse;
import com.birthday.birthday.model.Theme;
import com.birthday.birthday.repo.ThemeRepo;
import com.birthday.birthday.service.ThemeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ThemeServiceImpl implements ThemeService {

    private ThemeRepo themeRepository;

    @Autowired
    public ThemeServiceImpl(ThemeRepo themeRepository) {
        this.themeRepository = themeRepository;
    }

    @Override
    public List<ThemeResponse> getAllThemes() {
        List<Theme> themes = themeRepository.findAll();
        return themes.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public ThemeResponse getTheme(Long tid) {
        Theme theme = themeRepository.findById(tid)
                .orElseThrow(() -> new RuntimeException("Theme not found with id: " + tid));
        return convertToResponse(theme);
    }

    @Override
    public ThemeResponse createTheme(ThemeRequest request) {
        Theme theme = new Theme();
        BeanUtils.copyProperties(request, theme);
        Theme savedTheme = themeRepository.save(theme);
        return convertToResponse(savedTheme);
    }

    @Override
    public ThemeResponse updateTheme(ThemeRequest request, Long tid) {
        Theme theme = themeRepository.findById(tid)
                .orElseThrow(() -> new RuntimeException("Theme not found with id: " + tid));
        BeanUtils.copyProperties(request, theme);
        Theme updatedTheme = themeRepository.save(theme);
        return convertToResponse(updatedTheme);
    }

    @Override
    public boolean deleteTheme(Long tid) {
        if (themeRepository.existsById(tid)) {
            themeRepository.deleteById(tid);
            return true;
        }
        return false;
    }

    private ThemeResponse convertToResponse(Theme theme) {
        ThemeResponse response = new ThemeResponse();
        BeanUtils.copyProperties(theme, response);
        return response;
    }

}
