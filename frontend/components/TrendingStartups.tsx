import Link from "next/link";
import { calculateAIScore } from "@/utils/aiScore";

interface Props {
  companies: any[];
}

export default function TrendingStartups({
  companies,
}: Props) {
  const trending = [...companies]
    .sort(
      (a, b) =>
        (b.aiScore || 0) -
        (a.aiScore || 0)
    )
    .slice(0, 3);

  return (
    <section
      style={{
        margin: "40px 0",
      }}
    >
      <h2>🔥 Trending Startups</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {trending.map((company) => (
          <Link
            key={company.id}
            href={`/company/${company.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "20px",
                background: "#111",
                height: "100%",
              }}
            >
              <h3>{company.name}</h3>

              <p>
                ⭐ AI Score: {calculateAIScore(company)}
              </p>

              <p>
                💰 $
                {(
                  Number(company.funding) /
                  1000000
                ).toFixed(0)}
                M
              </p>

              <p>{company.industry}</p>

              <p>{company.country}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}