package com.startupsphere.backend.company.repository;

import com.startupsphere.backend.company.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository
        extends JpaRepository<Company, Long> {
}