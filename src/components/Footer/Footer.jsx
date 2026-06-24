import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-left">

          <img
            src="/icons/logo.png"
            alt="Meet Savaj Logo"
            className="footer-logo"
          />

          <p className="footer-text">
            Designing intuitive digital experiences with a focus on usability,
            creativity, and clean visual design.
          </p>

          <p className="copyright">
            © 2026 Meet Savaj. All Rights Reserved.
          </p>

        </div>

        <a href="#home" className="back-top" aria-label="Back to top">
          <FaArrowUp />
        </a>

      </div>
    </footer>
  );
}

export default Footer;