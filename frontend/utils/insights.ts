export function generateInsights(company: any, aiScore: number): string[] {
  const insights: string[] = [];

  const funding = Number(company.funding || 0);
  const employees = Number(company.employees || 0);

  if (funding >= 1000000000)
    insights.push(
      "Strong financial backing with over $1B in funding."
    );
  else if (funding >= 100000000)
    insights.push(
      "Well-funded startup with significant investor confidence."
    );

  if (employees >= 5000)
    insights.push(
      "Large workforce indicates operational stability."
    );
  else if (employees >= 1000)
    insights.push(
      "Growing team suggests healthy business expansion."
    );

  if (company.fundingStage === "Public")
    insights.push(
      "Publicly listed company with mature market presence."
    );
  else if (
    company.fundingStage === "Series E" ||
    company.fundingStage === "Series F"
  )
    insights.push(
      "Late-stage startup with lower investment risk."
    );

  if (aiScore >= 90)
    insights.push(
      "Ranks among the highest-rated startups on StartupSphereAI."
    );
  else if (aiScore >= 80)
    insights.push(
      "Shows excellent long-term growth potential."
    );

  insights.push(
    "AI recommendation is generated from funding, company maturity, workforce size and startup age."
  );

  return insights;
}