import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <h2 className="logo">Meet.</h2>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Designs</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;