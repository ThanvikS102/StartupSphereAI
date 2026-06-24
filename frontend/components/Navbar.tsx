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
  <a
    href="/"
    style={{ color: "white", textDecoration: "none" }}
  >
    Companies
  </a>

  {" | "}

  <a
    href="/analytics"
    style={{ color: "white", textDecoration: "none" }}
  >
    Analytics
  </a>

  {" | "}
<a href="/compare"
    style={{ color: "white", textDecoration: "none" }}
  >
    Compare
  </a>
  {" | "}
  <a
    href="#"
    style={{ color: "white", textDecoration: "none" }}
  >
    About
  </a>
</div>
    </nav>
  );
}