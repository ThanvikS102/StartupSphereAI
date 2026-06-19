import { Company } from "../types/company";
import Link from "next/link";
interface Props {
  company: Company;
}

export default function StartupCard({ company }: Props) {
 return (
  <Link
    href={`/company/${company.id}`}
    style={{
      textDecoration: "none",
      color: "white",
    }}
  >
    <div
      style={{
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "20px",
        cursor: "pointer",
      }}
    >
      <h2>{company.name}</h2>

      <p>{company.industry}</p>

      <p>{company.country}</p>

      <p>
        ${company.funding}
      </p>

      <p>{company.description}</p>
    </div>
  </Link>
);
}
 