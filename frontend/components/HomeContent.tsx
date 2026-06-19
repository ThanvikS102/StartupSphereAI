"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import StartupCard from "./StartupCard";
import IndustryFilter from "./IndustryFilter";
import CountryFilter from "./CountryFilter";

export default function HomeContent({ companies }: any) {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedIndustry, setSelectedIndustry] =
    useState("All");

  const [selectedCountry, setSelectedCountry] =
    useState("All");

  const industries: string[] = Array.from(
    new Set(
      companies.map(
        (company: any) => String(company.industry)
      )
    )
  );

  const countries: string[] = Array.from(
    new Set(
      companies.map(
        (company: any) => String(company.country)
      )
    )
  );

  const filteredCompanies = companies.filter(
    (company: any) => {
      const matchesSearch =
        company.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesIndustry =
        selectedIndustry === "All" ||
        company.industry === selectedIndustry;

      const matchesCountry =
        selectedCountry === "All" ||
        company.country === selectedCountry;

      return (
        matchesSearch &&
        matchesIndustry &&
        matchesCountry
      );
    }
  );

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <IndustryFilter
        industries={industries}
        selected={selectedIndustry}
        setSelected={setSelectedIndustry}
      />

      <CountryFilter
        countries={countries}
        selected={selectedCountry}
        setSelected={setSelectedCountry}
      />

      <h2>Featured Startups</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredCompanies.map((company: any) => (
          <StartupCard
            key={company.id}
            company={company}
          />
        ))}
      </div>
    </>
  );
}