import { Company } from "../types/company";

export async function getCompanies(): Promise<Company[]> {
  const response = await fetch(
    "http://localhost:8080/api/companies",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch companies");
  }

  return response.json();
}