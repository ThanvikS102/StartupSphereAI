package com.startupsphere.backend.company.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.startupsphere.backend.company.entity.Company;
import com.startupsphere.backend.company.repository.CompanyRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CompanyService {

    private final CompanyRepository repository;

    public Company getById(Long id) {
    return repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Company not found"));
}
    public List<Company> getAll() {
        return repository.findAll();
    }

    public Company save(Company company) {
        return repository.save(company);
    }
}