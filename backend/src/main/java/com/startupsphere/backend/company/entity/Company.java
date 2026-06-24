package com.startupsphere.backend.company.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "companies")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String website;

    private String industry;

    private String country;

    private Double funding;

    private Integer foundedYear;

    private Integer employees;

    private String headquarters;

    private String logoUrl;
private Integer aiScore;
    private String fundingStage;
    @Column(length = 5000)
    private String description;
}
