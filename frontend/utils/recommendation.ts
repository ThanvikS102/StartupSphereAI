export function getRecommendation(company: any) {

  const funding = Number(company.funding || 0);
  const score = Number(company.aiScore || 0);

  let stars = "★★☆☆☆";
  let title = "High Risk";
  let risk = "High";
  let growth = "Low";
  let description =
    "Funding and growth indicators are relatively weak.";

  if (score >= 90) {
    stars = "★★★★★";
    title = "Strong Buy";
    risk = "Low";
    growth = "Very High";
    description =
      "The startup has exceptional funding strength, maturity and long-term market potential.";
  }

  else if (score >= 80) {
    stars = "★★★★☆";
    title = "Buy";
    risk = "Low";
    growth = "High";
    description =
      "The startup demonstrates strong growth potential and healthy financial backing.";
  }

  else if (score >= 70) {
    stars = "★★★☆☆";
    title = "Hold";
    risk = "Medium";
    growth = "Medium";
    description =
      "The startup is growing steadily but carries moderate investment risk.";
  }

  return {
    stars,
    title,
    risk,
    growth,
    description,
    funding
  };

}