"use client";

interface Props {
  industries: string[];
  selected: string;
  setSelected: (industry: string) => void;
}
  
export default function IndustryFilter({
  industries,
  selected,
  setSelected,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px",
      }}
    >
      <button onClick={() => setSelected("All")}>
        All
      </button>

      {industries.map((industry) => (
        <button
          key={industry}
          onClick={() => setSelected(industry)}
        >
          {industry}
        </button>
      ))}
    </div>
  );
}