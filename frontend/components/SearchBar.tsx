"use client";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
      <input
        type="text"
        placeholder="Search startups..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "500px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid gray",
          background: "#111",
          color: "white",
        }}
      />
    </div>
  );
}