package com.startupsphere.backend.company.service;

import com.startupsphere.backend.company.entity.Company;
import com.startupsphere.backend.company.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository repository;

    public CompanyService(CompanyRepository repository) {
        this.repository = repository;
    }

    public List<Company> getAll() {
        return repository.findAll();
    }

    public Company save(Company company) {
        return repository.save(company);
    }
}