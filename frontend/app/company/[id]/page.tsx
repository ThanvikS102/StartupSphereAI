import Link from "next/link";

import { getCompanies } from "../../../services/companyService";
import { getRecommendation } from "@/utils/recommendation";
import { getHealth } from "@/utils/health";
import Badge from "@/components/ui/Badge";
import { calculateAIScore } from "@/utils/aiScore";
interface Props {
  params: Promise<{
    id: string;
  }>;
}

function HealthBar({
  title,
  value,
  danger = false,
}: {
  title: string;
  value: number;
  danger?: boolean;
}) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
        }}
      >
        <span>{title}</span>
        <strong>{value}%</strong>
      </div>

      <div
        style={{
          height: "10px",
          background: "#222",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            borderRadius: "20px",
            background: danger ? "#ef4444" : "#22c55e",
          }}
        />
      </div>
    </div>
  );
}

export default async function CompanyPage({ params }: Props) {
  const { id } = await params;
  const companies = await getCompanies();
  const company = companies.find(
    (c: any) => String(c.id) === id
  ) as any;
const aiScore = calculateAIScore(company);
  const similarCompanies = companies
    .filter(
      (c: any) =>
        c.id !== company?.id &&
        c.industry === company?.industry
    )
    .slice(0, 3);

  if (!company) {
    return <h1>Company Not Found</h1>;
  }

  const scoreColor =
    (aiScore || 0) >= 90
      ? "#22c55e"
      : (aiScore || 0) >= 80
      ? "#3b82f6"
      : "#f59e0b";

  const recommendation = getRecommendation(company);
  const health = getHealth(company);

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "40px",
        color: "white",
      }}
    >
      <a
        href="/"
        style={{
          color: "#9ca3af",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        ← Back to Startups
      </a>

      <div
        style={{
          marginTop: "35px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "10px",
            fontWeight: "700",
          }}
        >
          {company.name}
        </h1>

        <div
          style={{
            display: "inline-block",
            background:
              aiScore >= 90
                ? "#166534"
                : aiScore >= 80
                ? "#1d4ed8"
                : "#92400e",
            padding: "10px 25px",
            borderRadius: "999px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            ⭐ AI Score: {aiScore}/100
          </span>
        </div>

        <div
          style={{
            margin: "20px auto",
            width: "280px",
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "18px",
            background: "#111",
          }}
        >
          <p
            style={{
              color: "#9ca3af",
              margin: 0,
              fontSize: "14px",
            }}
          >
            Total Funding
          </p>

          <h2
            style={{
              margin: "8px 0 0",
              color: "#22c55e",
              fontSize: "36px",
            }}
          >
            ${((company.funding / 1000000) || 0).toFixed(0)}M
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
<Badge text={company.industry} />

<Badge text={company.country} />

<Badge text={company.fundingStage} />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <div className="stat-card">
          <h3>{company.foundedYear}</h3>
          <p>Founded</p>
        </div>

        <div className="stat-card">
          <h3>{company.employees}</h3>
          <p>Employees</p>
        </div>

        <div className="stat-card">
          <h3>{company.fundingStage}</h3>
          <p>Funding Stage</p>
        </div>

        <div className="stat-card">
          <h3>{company.country}</h3>
          <p>Country</p>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "14px",
          padding: "24px",
          background: "#111",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginTop: 0, color: "#3b82f6" }}>
          🤖 AI Investment Recommendation
        </h2>

        <h1 style={{ margin: "10px 0", fontSize: "32px" }}>
          {recommendation.stars}
        </h1>

        <h3 style={{ color: "#22c55e", marginBottom: "10px" }}>
          {recommendation.title}
        </h3>

        <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
          {recommendation.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong>Risk Level</strong>
            <br />
            {recommendation.risk}
          </div>

          <div>
            <strong>Growth Potential</strong>
            <br />
            {recommendation.growth}
          </div>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "14px",
          padding: "24px",
          background: "#111",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ marginTop: 0, color: "#22c55e" }}>
          📈 Startup Health Analysis
        </h2>

        <HealthBar title="Financial Strength" value={health.financial} />
        <HealthBar title="Market Potential" value={health.market} />
        <HealthBar title="Hiring Strength" value={health.hiring} />
        <HealthBar title="Investment Risk" value={health.risk} danger />
      </div>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "25px",
          background: "#111",
        }}
      >
        <p>
          <strong>Industry:</strong> {company.industry}
        </p>

        <p>
          <strong>Headquarters:</strong> {company.headquarters}
        </p>

        <p>
          <strong>Description:</strong> {company.description}
        </p>

        <a
          href={company.website}
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#00bfff",
            textDecoration: "none",
          }}
        >
          Visit Website →
        </a>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Similar Startups</h2>

        {similarCompanies.length > 0 ? (
          similarCompanies.map((startup: any) => (
            <Link
              key={startup.id}
              href={`/company/${startup.id}`}
              style={{
                display: "block",
                padding: "12px",
                marginTop: "10px",
                border: "1px solid #333",
                borderRadius: "10px",
                textDecoration: "none",
                color: "white",
              }}
            >
              {startup.name}
            </Link>
          ))
        ) : (
          <p>No similar startups found.</p>
        )}
      </div>
    </main>
  );
}