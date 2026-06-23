import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <a href="#home" className="logo">
          Meet<span>.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#designs">Designs</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;