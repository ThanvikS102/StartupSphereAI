interface Props {
  countries: string[];
  selected: string;
  setSelected: (country: string) => void;
}

export default function CountryFilter({
  countries,
  selected,
  setSelected,
}: Props) {
  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      style={{
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "20px",
        backgroundColor: "#111",
        color: "white",
      }}
    >
      <option value="All">All Countries</option>

      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
}