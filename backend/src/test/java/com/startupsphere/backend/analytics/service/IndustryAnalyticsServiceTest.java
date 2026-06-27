package com.startupsphere.backend.analytics.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.startupsphere.backend.analytics.dto.IndustryAnalyticsDTO;
import com.startupsphere.backend.company.entity.Company;
import com.startupsphere.backend.company.repository.CompanyRepository;

@ExtendWith(MockitoExtension.class)
class IndustryAnalyticsServiceTest {

    @Mock
    private CompanyRepository companyRepository;

    @InjectMocks
    private IndustryAnalyticsService service;

    @Test
    void shouldAggregateAnalyticsByIndustry() {
        Company fintechOne = Company.builder()
                .name("Alpha")
                .industry("Fintech")
                .funding(1_000_000.0)
                .aiScore(95)
                .build();

        Company fintechTwo = Company.builder()
                .name("Beta")
                .industry("Fintech")
                .funding(500_000.0)
                .aiScore(80)
                .build();

        Company healthOne = Company.builder()
                .name("Gamma")
                .industry("Health")
                .funding(400_000.0)
                .aiScore(70)
                .build();

        when(companyRepository.findAll()).thenReturn(List.of(fintechOne, fintechTwo, healthOne));

        List<IndustryAnalyticsDTO> analytics = service.getIndustryAnalytics();

        assertThat(analytics).hasSize(2);

        IndustryAnalyticsDTO fintechAnalytics = analytics.stream()
                .filter(item -> "Fintech".equals(item.getIndustry()))
                .findFirst()
                .orElseThrow();

        assertThat(fintechAnalytics.getCompanies()).isEqualTo(2);
        assertThat(fintechAnalytics.getTotalFunding()).isEqualTo(1_500_000.0);
        assertThat(fintechAnalytics.getAverageAIScore()).isEqualTo(87.5);
        assertThat(fintechAnalytics.getTopStartup()).isEqualTo("Alpha");
    }
}
