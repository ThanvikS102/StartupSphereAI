package com.startupsphere.backend.analytics.controller;

import com.startupsphere.backend.analytics.dto.IndustryAnalyticsDTO;
import com.startupsphere.backend.analytics.service.IndustryAnalyticsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
@CrossOrigin("*")
public class IndustryAnalyticsController {

    private final IndustryAnalyticsService service;

    @GetMapping("/industry")
    public List<IndustryAnalyticsDTO> getIndustryAnalytics() {

        return service.getIndustryAnalytics();

    }

}