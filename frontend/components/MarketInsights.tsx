interface Props {
  companies: any[];
}

export default function MarketInsights({
  companies,
}: Props) {
  // Most funded industry
  const industryFunding: Record<string, number> = {};

  companies.forEach((company) => {
    industryFunding[company.industry] =
      (industryFunding[company.industry] || 0) +
      Number(company.funding);
  });

  const mostFundedIndustry =
    Object.entries(industryFunding).sort(
      (a, b) => b[1] - a[1]
    )[0];

  // Country with most startups
  const countryCounts: Record<string, number> = {};

  companies.forEach((company) => {
    countryCounts[company.country] =
      (countryCounts[company.country] || 0) + 1;
  });

  const mostActiveCountry =
    Object.entries(countryCounts).sort(
      (a, b) => b[1] - a[1]
    )[0];

  // Largest employer
  const largestEmployer = [...companies].sort(
    (a, b) =>
      (b.employees || 0) -
      (a.employees || 0)
  )[0];

  // Average startup age
  const currentYear = new Date().getFullYear();

  const averageAge =
    companies.reduce(
      (sum, company) =>
        sum +
        (currentYear -
          (company.foundedYear ||
            currentYear)),
      0
    ) / companies.length;

  return (
    <section
      style={{
        margin: "50px 0",
      }}
    >
      <h2>📊 Market Insights</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <InsightCard
          title="Most Funded Industry"
          value={mostFundedIndustry?.[0]}
        />

        <InsightCard
          title="Most Active Country"
          value={mostActiveCountry?.[0]}
        />

        <InsightCard
          title="Largest Employer"
          value={largestEmployer?.name}
        />

        <InsightCard
          title="Average Startup Age"
          value={`${Math.round(
            averageAge
          )} Years`}
        />
      </div>
    </section>
  );
}

function InsightCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "20px",
        background: "#111",
      }}
    >
      <h4>{title}</h4>

      <h2>{value}</h2>
    </div>
  );
}