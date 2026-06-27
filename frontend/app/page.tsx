import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HomeContent from "../components/HomeContent";
import { getCompanies } from "../services/companyService";
import TopStartups from "../components/TopStartups";
import TrendingStartups from "../components/TrendingStartups";
import MarketInsights from "../components/MarketInsights";
import { rankCompanies } from "@/utils/ranking";
export default async function Home() {
  const companies = await getCompanies();
const rankedCompanies = rankCompanies(companies);
  return (
    <>
      <Navbar />

      <Hero />

      <Stats companies={companies} />

      <main
        style={{
          padding: "20px",
        }}
      >
        <HomeContent companies={companies} />
        <TrendingStartups companies={companies} />
        <MarketInsights companies={companies} />
        <TopStartups companies={companies} />
      </main>
    </>
  );
}