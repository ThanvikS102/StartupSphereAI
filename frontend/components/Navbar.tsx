export default function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        borderBottom: "1px solid #333",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>StartupSphere AI</h2>

      <div>
        Companies | Analytics | About
      </div>
    </nav>
  );
}