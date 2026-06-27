export function calculateAIScore(company: any): number {
  let score = 0;

  // Funding (40 points)
  const funding = Number(company.funding || 0);

  if (funding >= 5000000000) score += 40;
  else if (funding >= 1000000000) score += 35;
  else if (funding >= 500000000) score += 30;
  else if (funding >= 100000000) score += 20;
  else score += 10;

  // Employees (20 points)
  const employees = Number(company.employees || 0);

  if (employees >= 10000) score += 20;
  else if (employees >= 5000) score += 16;
  else if (employees >= 1000) score += 12;
  else score += 8;

  // Funding Stage (20 points)
  const stage = company.fundingStage || "";

  switch (stage) {
    case "Public":
      score += 20;
      break;
    case "Series F":
    case "Series E":
      score += 18;
      break;
    case "Series D":
    case "Series C":
      score += 15;
      break;
    default:
      score += 10;
  }

  // Company Age (20 points)
  const founded = Number(company.foundedYear || 2024);
  const age = new Date().getFullYear() - founded;

  if (age >= 10) score += 20;
  else if (age >= 5) score += 15;
  else score += 10;

  return Math.min(score, 100);
}