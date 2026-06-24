import Link from "next/link";

export default function StartupCard({
  company,
}: any) {
  return (
    <Link
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
          cursor: "pointer",
          transition: "all 0.3s ease",
          backgroundColor: "#111",
          minHeight: "220px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              marginBottom: "10px",
              fontSize: "22px",
            }}
          >
            {company.name}
          </h3>

          <p>
            <strong>Industry:</strong>{" "}
            {company.industry}
          </p>

          <p>
            <strong>Country:</strong>{" "}
            {company.country}
          </p>

          <p>
            <strong>Funding:</strong> $
            {Number(
              company.funding
            ).toLocaleString()}
          </p>

          <p
            style={{
              marginTop: "12px",
              color: "#aaa",
            }}
          >
            {company.description}
          </p>
        </div>

        <div
          style={{
            marginTop: "15px",
            color: "#3b82f6",
            fontWeight: "bold",
          }}
        >
          View Details →
        </div>
      </div>
    </Link>
  );
}