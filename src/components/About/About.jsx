import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <div className="about-grid">

          <div className="about-card">
            <h3>🎨 UI Design</h3>
            <p>
              Creating clean, modern, and visually engaging interfaces focused
              on usability and aesthetics.
            </p>
          </div>

          <div className="about-card">
            <h3>🧠 UX Thinking</h3>
            <p>
              Solving user problems through research, wireframing,
              prototyping, and iterative design.
            </p>
          </div>

          <div className="about-card">
            <h3>⚡ Frontend</h3>
            <p>
              Converting Figma designs into responsive React websites with
              pixel-perfect implementation.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;