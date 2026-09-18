import "./Statistics.css";

const statistics = [
  {
    number: "16,548",
    label: "Support Given",
    note: "Tickets resolved for clients across every project we run.",
    size: "lg",
  },
  {
    number: "254+",
    label: "Client Rating",
    note: "5-star reviews from businesses we've delivered for.",
    size: "sm",
  },
  {
    number: "3M+",
    label: "Money Saved",
    note: "Saved for clients through efficient builds and planning.",
    size: "sm",
  },
  {
    number: "145",
    label: "Happy Clients",
    note: "Businesses currently running on products we built.",
    size: "sm",
  },
];

const Statistics = () => {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        <div className="stats-heading">
          <h2>Numbers that back it up</h2>
        </div>

        <div className="stats-grid">
          {statistics.map((stat) => (
            <div className={`stats-card stats-card--${stat.size}`} key={stat.label}>
              <span className="stats-watermark" aria-hidden="true">
                {stat.number}
              </span>
              <div className="stats-content">
                <span className="stats-number">{stat.number}</span>
                <span className="stats-label">{stat.label}</span>
                <p className="stats-note">{stat.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
