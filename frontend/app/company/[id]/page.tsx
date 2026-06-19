import { getCompanies } from "../../../services/companyService";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const companies = await getCompanies();

  const company = companies.find(
    (c: any) => c.id === Number(id)
  );

  if (!company) {
    return <h1>Company Not Found</h1>;
  }

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>{company.name}</h1>

      <p>
        <strong>Industry:</strong> {company.industry}
      </p>

      <p>
        <strong>Country:</strong> {company.country}
      </p>

      <p>
        <strong>Funding:</strong> $
        {company.funding.toLocaleString()}
      </p>

      <p>
        <strong>Website:</strong>{" "}
        <a
          href={company.website}
          target="_blank"
          rel="noreferrer"
        >
          {company.website}
        </a>
      </p>

      <h3>Description</h3>

      <p>{company.description}</p>
    </main>
  );
}