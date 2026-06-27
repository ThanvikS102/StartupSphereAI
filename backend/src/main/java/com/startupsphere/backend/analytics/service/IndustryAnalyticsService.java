package com.startupsphere.backend.analytics.service;

import com.startupsphere.backend.analytics.dto.IndustryAnalyticsDTO;
import com.startupsphere.backend.company.entity.Company;
import com.startupsphere.backend.company.repository.CompanyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class IndustryAnalyticsService {

    private final CompanyRepository repository;

    public List<IndustryAnalyticsDTO> getIndustryAnalytics() {

        List<Company> companies = repository.findAll();

        Map<String, List<Company>> grouped =
                companies.stream()
                        .collect(Collectors.groupingBy(Company::getIndustry));

        List<IndustryAnalyticsDTO> result = new ArrayList<>();

        for (String industry : grouped.keySet()) {

            List<Company> list = grouped.get(industry);

            int companyCount = list.size();

            double totalFunding =
                    list.stream()
                            .mapToDouble(Company::getFunding)
                            .sum();

            double averageScore =
                    list.stream()
                            .mapToInt(c ->
                                    c.getAiScore() == null ? 0 : c.getAiScore())
                            .average()
                            .orElse(0);

            Company topCompany =
                    list.stream()
                            .max(
                                    Comparator.comparing(
                                            c -> c.getAiScore() == null ? 0 : c.getAiScore()
                                    )
                            )
                            .orElse(null);

            result.add(

                    IndustryAnalyticsDTO.builder()

                            .industry(industry)

                            .companies(companyCount)

                            .totalFunding(totalFunding)

                            .averageAIScore(averageScore)

                            .topStartup(
                                    topCompany == null
                                            ? "-"
                                            : topCompany.getName())

                            .build()

            );

        }

        return result;

    }

}