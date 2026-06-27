package com.startupsphere.backend.analytics.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IndustryAnalyticsDTO {

    private String industry;

    private int companies;

    private Double totalFunding;

    private Double averageAIScore;

    private String topStartup;

}