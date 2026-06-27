const API_URL = "http://localhost:8080/api/analytics";

export async function getIndustryAnalytics() {
  const response = await fetch(`${API_URL}/industry`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch industry analytics");
  }

  return response.json();
}