interface Props {
  companies?: any[];
}

export default function Stats({ companies = [] }: Props) {
  const totalFunding = companies.reduce(
    (sum, company) => sum + Number(company.funding || 0),
    0
  );

  const totalStartups = companies.length;

  const totalIndustries = new Set(
    companies.map((c) => c.industry)
  ).size;

  const totalCountries = new Set(
    companies.map((c) => c.country)
  ).size;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        padding: "40px 20px",
      }}
    >
      <div>
        <h2>{totalStartups}+</h2>
        <p>Startups</p>
      </div>

      <div>
        <h2>{totalIndustries}+</h2>
        <p>Industries</p>
      </div>

      <div>
        <h2>{totalCountries}+</h2>
        <p>Countries</p>
      </div>

      <div>
        <h2>
          ${(totalFunding / 1000000000).toFixed(1)}B+
        </h2>
        <p>Funding</p>
      </div>
    </div>
  );
}