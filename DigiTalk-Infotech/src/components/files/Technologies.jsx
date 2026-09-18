import "./Technologies.css";

const technologies = [
  { name: "Microsoft .NET", logo: null },
  { name: "SQL", logo: null },
  { name: "React", logo: null },
  { name: "HTML", logo: null },
  { name: "CSS", logo: null },
  { name: "PHP", logo: null },
  { name: "Shopify", logo: null },
  { name: "SQL Server", logo: null },
  { name: "Angular", logo: null },
  { name: "Magento", logo: null },
  { name: "Node.js", logo: null },
  { name: "WordPress", logo: null },
];

const TechPill = ({ tech }) => (
  <div className="tech-pill">
    {tech.logo ? (
      <img src={tech.logo} alt={tech.name} className="tech-pill-logo" />
    ) : (
      <span className="tech-pill-mark" aria-hidden="true">
        {tech.name.charAt(0)}
      </span>
    )}
    <span className="tech-pill-name">{tech.name}</span>
  </div>
);

const Technologies = () => {
  return (
    <section className="tech-section">
      <div className="tech-heading">
        <h2>Technologies we use</h2>
        <p>A stack chosen for the job, not for the trend.</p>
      </div>

      <div className="tech-marquee">
        <div className="tech-track">
          {technologies.map((tech) => (
            <TechPill tech={tech} key={`a-${tech.name}`} />
          ))}
        </div>
        <div className="tech-track" aria-hidden="true">
          {technologies.map((tech) => (
            <TechPill tech={tech} key={`b-${tech.name}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
