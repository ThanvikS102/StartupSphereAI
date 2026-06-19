import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import HomeContent from "../components/HomeContent";
import { getCompanies } from "../services/companyService";

export default async function Home() {
  const companies = await getCompanies();

  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <main
        style={{
          padding: "20px",
        }}
      >
        <HomeContent companies={companies} />
      </main>
    </>
  );
}