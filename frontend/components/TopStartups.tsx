import Link from "next/link";
export default function TopStartups({
  companies,
}: any) {
  const topCompanies = [...companies]
    .sort(
      (a, b) =>
        (b.aiScore || 0) -
        (a.aiScore || 0)
    )
    .slice(0, 5);

  return (
    <section
      style={{
        marginTop: "50px",
      }}
    >
      <h2>
        🏆 Top AI Ranked Startups
      </h2>

      {topCompanies.map(
        (
          company: any,
          index: number
        ) => (
          <div
            key={company.id}
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              padding: "15px",
              border:
                "1px solid #333",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
           <Link
  href={`/company/${company.id}`}
  style={{
    color: "white",
    textDecoration: "none",
  }}
>
  #{index + 1} {company.name}
</Link>

            <strong>
              {(company.aiScore || 0)}/100
            </strong>
          </div>
        )
      )}
    </section>
  );
}