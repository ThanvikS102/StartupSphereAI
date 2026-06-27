export function getHealth(company: any) {

  const funding = Number(company.funding || 0);
  const employees = Number(company.employees || 0);
  const score = Number(company.aiScore || 0);

  // Financial Strength
  const financial =
    Math.min(100, Math.round(funding / 50000000));

  // Hiring Growth
  const hiring =
    Math.min(100, Math.round(employees / 100));

  // Market Potential
  const market =
    Math.min(
      100,
      Math.round((financial + score) / 2)
    );

  // Lower risk for higher AI scores
  const risk =
    Math.max(5, 100 - score);

  return {
    financial,
    hiring,
    market,
    risk,
  };

}