"use client";

import { useState } from "react";

export default function ComparePage() {
  const startups = [
    {
      name: "Grab",
      country: "Singapore",
      industry: "FinTech",
      funding: "$12B",
    },
    {
      name: "PatSnap",
      country: "Singapore",
      industry: "AI",
      funding: "$4B",
    },
    {
      name: "Freshworks",
      country: "India",
      industry: "SaaS",
      funding: "$1.5B",
    },
    {
      name: "Sea Group",
      country: "Singapore",
      industry: "E-Commerce",
      funding: "$6B",
    },
  ];

  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const firstCompany = startups.find(
    (s) => s.name === first
  );

  const secondCompany = startups.find(
    (s) => s.name === second
  );

  return (
    <main
      style={{
        padding: "40px",
        color: "white",
      }}
    >
      <h1>Startup Comparison</h1>

      <div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    marginBottom: "30px",
  }}
>
      
        <select
          value={first}
          onChange={(e) =>
            setFirst(e.target.value)
          }
        >
          <option value="">
            Select Startup
          </option>

          {startups.map((s) => (
            <option
              key={s.name}
              value={s.name}
            >
              {s.name}
            </option>
          ))}
        </select>

        <select
          value={second}
          onChange={(e) =>
            setSecond(e.target.value)
          }
        >
          <option value="">
            Select Startup
          </option>

          {startups.map((s) => (
            <option
              key={s.name}
              value={s.name}
            >
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {firstCompany && secondCompany && (
  <div
    style={{
      marginTop: "40px",
      overflowX: "auto",
    }}
  >
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              border: "1px solid #333",
              padding: "15px",
            }}
          >
            Metric
          </th>

          <th
            style={{
              border: "1px solid #333",
              padding: "15px",
            }}
          >
            {firstCompany.name}
          </th>

          <th
            style={{
              border: "1px solid #333",
              padding: "15px",
            }}
          >
            {secondCompany.name}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            Industry
          </td>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            {firstCompany.industry}
          </td>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            {secondCompany.industry}
          </td>
        </tr>

        <tr>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            Country
          </td>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            {firstCompany.country}
          </td>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            {secondCompany.country}
          </td>
        </tr>

        <tr>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            Funding
          </td>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            {firstCompany.funding}
          </td>
          <td style={{ border: "1px solid #333", padding: "15px" }}>
            {secondCompany.funding}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}
    </main>
  );
}