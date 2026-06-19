package com.startupsphere.backend.company.controller;

import com.startupsphere.backend.company.entity.Company;
import com.startupsphere.backend.company.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CompanyController {

    private final CompanyService service;

    @GetMapping
    public List<Company> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Company getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @PostMapping
    public Company create(@RequestBody Company company) {
        return service.save(company);
    }
}