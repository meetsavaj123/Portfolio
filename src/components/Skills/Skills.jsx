import "./Skills.css";

const skills=[
"Figma",
"UI Design",
"UX Design",
"Wireframing",
"Prototype",
"Design System",
"Auto Layout",
"React",
"HTML",
"CSS",
"JavaScript",
"Framer Motion"
];

function Skills(){

return(

<section className="skills">

<div className="container">

<h2 className="section-title">
Skills
</h2>

<div className="skill-grid">

{skills.map((skill,index)=>(

<div className="skill-card" key={index}>

{skill}

</div>

))}

</div>

</div>

</section>

)

}

export default Skills;