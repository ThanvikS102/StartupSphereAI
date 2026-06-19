import { Company } from "../types/company";

export async function getCompanyById(
  id: string
): Promise<Company> {

  const response = await fetch(
    `http://localhost:8080/api/companies/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Company not found");
  }

  return response.json();
}