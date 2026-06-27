import AnalyticsChart from "../../components/AnalyticsChart";
import { getCompanies } from "../../services/companyService";
import CountryChart from "../../components/CountryChart";
import Card from "@/components/ui/Card";
import IndustryAnalytics from "../../components/IndustryAnalytics";
import { getIndustryAnalytics } from "../../services/analyticsService";
export default async function Analytics() {
  const companies = await getCompanies();
  const industryAnalytics =
  await getIndustryAnalytics();
const countryCounts: Record<
  string,
  number
> = {};

companies.forEach((company: any) => {
  if (
    !countryCounts[company.country]
  ) {
    countryCounts[
      company.country
    ] = 0;
  }

  countryCounts[
    company.country
  ]++;
});

const countryData = Object.entries(
  countryCounts
).map(([country, count]) => ({
  country,
  count,
}));
const topFunded = [...companies]
  .sort(
    (a: any, b: any) =>
      Number(b.funding) -
      Number(a.funding)
  )
  .slice(0, 5);
  const industryFunding: Record<
    string,
    number
  > = {};

  companies.forEach((company: any) => {
    if (
      !industryFunding[company.industry]
    ) {
      industryFunding[
        company.industry
      ] = 0;
    }

    industryFunding[
      company.industry
    ] += Number(company.funding);
  });

  const chartData = Object.entries(
    industryFunding
  ).map(([industry, funding]) => ({
    industry,
    funding:
      funding / 1000000000,
  }));

  return (
    <main
      style={{
        padding: "40px",
        color: "white",
      }}
    >
      <h1>Startup Analytics</h1>

      <h2>
        Funding By Industry (Billion $)
      </h2>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "50px",
  }}
>
  <div
    style={{
      border: "1px solid #333",
      borderRadius: "10px",
      padding: "20px",
    }}
  >
    <h2>{companies.length}</h2>
    <p>Total Startups</p>
  </div>

  <div
    style={{
      border: "1px solid #333",
      borderRadius: "10px",
      padding: "20px",
    }}
  >
    <h2>
      $
      {(
        companies.reduce(
          (sum: number, c: any) =>
            sum + Number(c.funding),
          0
        ) / 1000000000
      ).toFixed(1)}
      B
    </h2>
    <p>Total Funding</p>
  </div>

  <div
    style={{
      border: "1px solid #333",
      borderRadius: "10px",
      padding: "20px",
    }}
  >
    <h2>
      {
        new Set(
          companies.map(
            (c: any) => c.country
          )
        ).size
      }
    </h2>
    <p>Countries</p>
  </div>

  <div
    style={{
      border: "1px solid #333",
      borderRadius: "10px",
      padding: "20px",
    }}
  >
    <h2>
      {
        new Set(
          companies.map(
            (c: any) => c.industry
          )
        ).size
      }
    </h2>
    <p>Industries</p>
  </div>
</div>
      <AnalyticsChart
        data={chartData}
      />
      <h2
  style={{
    marginTop: "60px",
  }}
>
  Startups By Country
</h2>

<CountryChart
  data={countryData}
/>
<h2
  style={{
    marginTop: "60px",
  }}
>
  Top Funded Startups
</h2>

<Card>
  <div
    style={{
      border: "1px solid #333",
      borderRadius: "12px",
      padding: "20px",
      marginTop: "20px",
    }}
  >
    {topFunded.map(
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
            padding: "12px 0",
            borderBottom:
              index !==
              topFunded.length - 1
                ? "1px solid #222"
                : "none",
          }}
        >
          <span>
            {index + 1}.{" "}
            {company.name}
          </span>

          <span>
            $
            {(
              Number(
                company.funding
              ) / 1000000000
            ).toFixed(2)}
            B
          </span>
        </div>
      )
    )}
  </div>
</Card>
<h2
  style={{
    marginTop: "70px",
    marginBottom: "25px",
  }}
>
  Industry Intelligence
</h2>

<IndustryAnalytics
  analytics={industryAnalytics}
/>
    </main>
  );
}