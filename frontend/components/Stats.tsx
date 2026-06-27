interface Props {
  companies?: any[];
}

export default function Stats({
  companies = [],
}: Props) {
  const totalFunding = companies.reduce(
    (sum, company) =>
      sum + Number(company.funding || 0),
    0
  );

  const totalStartups = companies.length;

  const totalIndustries = new Set(
    companies.map((c) => c.industry)
  ).size;

  const totalCountries = new Set(
    companies.map((c) => c.country)
  ).size;

  const stats = [
    {
      icon: "🚀",
      value: totalStartups,
      label: "Startups",
    },
    {
      icon: "🏭",
      value: totalIndustries,
      label: "Industries",
    },
    {
      icon: "🌍",
      value: totalCountries,
      label: "Countries",
    },
    {
      icon: "💰",
      value:
        "$" +
        (
          totalFunding /
          1000000000
        ).toFixed(1) +
        "B",
      label: "Funding",
    },
  ];

  return (
    <section
      style={{
        padding: "70px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "38px",
          marginBottom: "50px",
        }}
      >
        Market Overview
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="market-card"
          >
            <div
              style={{
                fontSize: "40px",
              }}
            >
              {stat.icon}
            </div>

            <h1>{stat.value}</h1>

            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}