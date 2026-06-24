import Link from "next/link";

import { getCompanies } from "../../../services/companyService";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CompanyPage({
  params,
}: Props) {
  const { id } = await params;

  const companies = await getCompanies();

  const company = companies.find(
    (c: any) => String(c.id) === id
  );
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
    (company.aiScore || 0) >= 90
      ? "#22c55e"
      : (company.aiScore || 0) >= 80
      ? "#3b82f6"
      : "#f59e0b";

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
          color: "#888",
          textDecoration: "none",
        }}
      >
        ← Back
      </a>

      <h1
        style={{
          marginTop: "20px",
          fontSize: "48px",
        }}
      >
        {(company as any).name}
      </h1>

      {/* AI Score Card */}
      <div
        style={{
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "20px",
          marginBottom: "30px",
          background: "#111",
        }}
      >
        <h2
          style={{
            color: scoreColor,
            marginBottom: "10px",
          }}
        >
          AI Startup Score: {(company as any).aiScore}/100
        </h2>

        <p style={{ color: "#aaa" }}>
          Based on funding strength and
          growth potential.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <div className="stat-card">
          <h3>{(company as any).foundedYear}</h3>
          <p>Founded</p>
        </div>

        <div className="stat-card">
          <h3>{(company as any).employees}</h3>
          <p>Employees</p>
        </div>

        <div className="stat-card">
          <h3>{(company as any).fundingStage}</h3>
          <p>Funding Stage</p>
        </div>

        <div className="stat-card">
          <h3>{company.country}</h3>
          <p>Country</p>
        </div>
      </div>

      {/* Company Details */}
      <div
        style={{
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "25px",
          background: "#111",
        }}
      >
        <p>
          <strong>Industry:</strong>{" "}
          {company.industry}
        </p>

        <p>
          <strong>Country:</strong>{" "}
          {(company as any).country}
        </p>

        <p>
          <strong>Founded:</strong>{" "}
          {(company as any).foundedYear}
        </p>

        <p>
          <strong>Headquarters:</strong>{" "}
          {(company as any).headquarters}
        </p>

        <p>
          <strong>Employees:</strong>{" "}
          {(company as any).employees}
        </p>

        <p>
          <strong>Funding Stage:</strong>{" "}
          {(company as any).fundingStage}
        </p>

        <p>
          <strong>Funding:</strong> $
          {Number(
            company.funding
          ).toLocaleString()}
        </p>

        <p>
          <strong>Description:</strong>{" "}
          {company.description}
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
      <div
  style={{
    marginTop: "40px",
  }}
>
  <h2>Similar Startups</h2>

  {similarCompanies.length > 0 ? (
    similarCompanies.map(
      (startup: any) => (
        <Link
          key={startup.id}
          href={`/company/${startup.id}`}
          style={{
            display: "block",
            padding: "12px",
            marginTop: "10px",
            border:
              "1px solid #333",
            borderRadius: "10px",
            textDecoration: "none",
            color: "white",
          }}
        >
          {startup.name}
        </Link>
      )
    )
  ) : (
    <p>
      No similar startups found.
    </p>
  )}
</div>
    </main>
  );
}