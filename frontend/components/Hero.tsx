import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background:
          "linear-gradient(180deg,#0f172a,#111827)",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <p
        style={{
          color: "#3b82f6",
          fontWeight: "bold",
          letterSpacing: "2px",
          marginBottom: "15px",
        }}
      >
        🚀 STARTUPSPHERE AI
      </p>

      <h1
        style={{
          fontSize: "64px",
          margin: "0",
          color: "white",
          fontWeight: "700",
        }}
      >
        AI-Powered Startup
        <br />
        Intelligence Platform
      </h1>

      <p
        style={{
          maxWidth: "750px",
          margin: "30px auto",
          color: "#9ca3af",
          fontSize: "20px",
          lineHeight: "1.8",
        }}
      >
        Discover, analyze and compare innovative startups
        through funding insights, AI-powered scoring,
        market trends and intelligent investment analysis.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <Link
          href="/"
          style={{
            background: "#2563eb",
            color: "white",
            padding: "14px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Explore Startups
        </Link>

        <Link
          href="/analytics"
          style={{
            border: "1px solid #3b82f6",
            color: "#3b82f6",
            padding: "14px 30px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          View Analytics
        </Link>
      </div>
    </section>
  );
}