import "./HowWeWork.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    summary: "Understanding your goals",
    description:
      "We start with a deep look at your business, audience and requirements to define what success actually looks like.",
  },
  {
    number: "02",
    title: "Strategy",
    summary: "Choosing the right approach",
    description:
      "We plan the technology, structure and execution path that fits your budget, timeline and long-term goals.",
  },
  {
    number: "03",
    title: "Design",
    summary: "Shaping the experience",
    description:
      "We design the visual direction and user experience, balancing brand identity with clarity and usability.",
  },
  {
    number: "04",
    title: "Develop",
    summary: "Building it for real",
    description:
      "We turn the approved design into a functional, well-structured website or application, built to last.",
  },
  {
    number: "05",
    title: "Test",
    summary: "Checking every detail",
    description:
      "We test responsiveness, performance and functionality across devices before anything goes live.",
  },
  {
    number: "06",
    title: "Deliver",
    summary: "Launch and support",
    description:
      "We launch the finished product and stay on hand for support, updates and future improvements.",
  },
];

const HowWeWork = () => {
  return (
    <section className="hww-section">
      <div className="hww-inner">
        <div className="hww-heading">
          <h2>How we work?</h2>
          <p>A clear path from first conversation to finished product.</p>
        </div>

        <div className="hww-rail">
          <div className="hww-line" aria-hidden="true" />
          {steps.map((step, index) => (
            <div className="hww-step" key={step.number} style={{ "--i": index }}>
              <div className="hww-node" aria-hidden="true" />
              <span className="hww-ghost">{step.number}</span>
              <div className="hww-card">
                <span className="hww-index">{step.number}</span>
                <h3 className="hww-title">{step.title}</h3>
                <p className="hww-summary">{step.summary}</p>
                <p className="hww-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
