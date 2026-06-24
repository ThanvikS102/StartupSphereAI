import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HomeContent from "../components/HomeContent";
import { getCompanies } from "../services/companyService";
import TopStartups from "../components/TopStartups";
export default async function Home() {
  const companies = await getCompanies();

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
        <TopStartups companies={companies} />
      </main>
    </>
  );
}