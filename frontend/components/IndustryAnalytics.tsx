interface Props {
  analytics: any[];
}

export default function IndustryAnalytics({
  analytics,
}: Props) {
  return (
    <section
      style={{
        marginTop: "60px",
      }}
    >
      <h2
        style={{
          fontSize: "34px",
          marginBottom: "30px",
        }}
      >
        📊 Industry Intelligence
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {analytics.map((industry) => (
          <div
            key={industry.industry}
            style={{
              background: "#111827",
              border: "1px solid #2a2a2a",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "20px",
              }}
            >
              {industry.industry}
            </h3>

            <p>
              <strong>Companies:</strong>{" "}
              {industry.companies}
            </p>

            <p>
              <strong>Total Funding:</strong>{" "}
              $
              {(industry.totalFunding / 1000000000).toFixed(
                1
              )}
              B
            </p>

            <p>
              <strong>Average AI Score:</strong>{" "}
              {industry.averageAIScore.toFixed(1)}
            </p>

            <p>
              <strong>Top Startup:</strong>{" "}
              {industry.topStartup}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}