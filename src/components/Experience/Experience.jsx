import "./Experience.css";

const experiences = [
  {
    year: "2025",
    title: "UI/UX Designer",
    company: "Freelance",
    desc: "Designed responsive websites, dashboards, mobile apps, and design systems using Figma."
  },
  {
    year: "2024",
    title: "Frontend Developer",
    company: "Personal Projects",
    desc: "Built responsive React websites with modern UI and smooth user experiences."
  }
];

function Experience() {
  return (
    <section className="experience">

      <div className="container">

        <h2 className="section-title">
          Experience
        </h2>

        {experiences.map((item, index) => (
          <div className="timeline" key={index}>

            <div className="year">
              {item.year}
            </div>

            <div className="content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;