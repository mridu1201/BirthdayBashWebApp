package com.birthday.birthday.controller;

import com.birthday.birthday.constant.Api;
import com.birthday.birthday.dto.request.ThemeRequest;
import com.birthday.birthday.dto.response.ThemeResponse;
import com.birthday.birthday.service.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Api.THEME)
public class ThemeController {

    private ThemeService themeService;

    @Autowired
    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ThemeResponse>> getAllThemes() {
        List<ThemeResponse> themes = themeService.getAllThemes();
        return ResponseEntity.ok(themes);
    }

    @GetMapping("/{tid}")
    public ResponseEntity<ThemeResponse> getTheme(@PathVariable Long tid) {
        ThemeResponse theme = themeService.getTheme(tid);
        return ResponseEntity.ok(theme);
    }

    @PostMapping("/add")
    public ResponseEntity<ThemeResponse> createTheme(@RequestBody ThemeRequest request) {
        ThemeResponse createdTheme = themeService.createTheme(request);
        return new ResponseEntity<>(createdTheme, HttpStatus.CREATED);
    }

    @PutMapping("/{tid}")
    public ResponseEntity<ThemeResponse> updateTheme(@RequestBody ThemeRequest request, @PathVariable Long tid) {
        ThemeResponse updatedTheme = themeService.updateTheme(request, tid);
        return ResponseEntity.ok(updatedTheme);
    }

    @DeleteMapping("/{tid}")
    public ResponseEntity<String> deleteTheme(@PathVariable Long tid) {
        boolean deleted = themeService.deleteTheme(tid);
        return deleted ? ResponseEntity.ok().body("Successfully deleted "+tid):ResponseEntity.notFound().build();
    }
}
