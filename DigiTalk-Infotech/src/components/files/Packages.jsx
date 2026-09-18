import "./Packages.css";

const packages = [
  { id: "basic", name: "Basic Package", tag: "", cta: "Buy Now" },
  { id: "standard", name: "Standard Package", tag: "Recommended", cta: "Buy Now" },
  { id: "customized", name: "Customized Package", tag: "", cta: "Buy Now" },
];

const featureRows = [
  { label: "CRM Software", values: [true, true, true] },
  { label: "Lead Management", values: [true, true, true] },
  { label: "Task Management", values: [true, true, true] },
  { label: "Website Development", values: ["Basic", "Standard", "Advanced"] },
  { label: "SEO Optimization", values: ["Basic", "Advanced", "Full"] },
  { label: "Mobile App Development", values: [false, "Included", "Included"] },
  { label: "Digital Marketing", values: [false, true, true] },
  {
    label: "Support",
    values: ["Email Support", "Email + Chat Support", "24/7 Dedicated Support"],
  },
];

const Check = () => (
  <svg className="pkg-icon pkg-icon--check" viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.08" />
    <path
      d="M6 10.2l2.6 2.6L14.2 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cross = () => (
  <svg className="pkg-icon pkg-icon--cross" viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.06" />
    <path
      d="M7 7l6 6M13 7l-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const renderCell = (value) => {
  if (value === true) return <Check />;
  if (value === false) return <Cross />;
  return <span className="pkg-cell-text">{value}</span>;
};

const Packages = () => {
  return (
    <section className="pkg-section">
      <div className="pkg-inner">
        <div className="pkg-heading">
          <h2>Packages</h2>
          <p>
            Compare our CRM, digital marketing and website development
            packages, and choose the plan that fits your business needs.
          </p>
        </div>

        <div className="pkg-scroll">
          <table className="pkg-table">
            <thead>
              <tr>
                <th className="pkg-th pkg-th--label">Features</th>
                {packages.map((pkg) => (
                  <th
                    key={pkg.id}
                    className={`pkg-th ${pkg.tag ? "pkg-th--highlight" : ""}`}
                  >
                    {pkg.tag && <span className="pkg-tag">{pkg.tag}</span>}
                    <span className="pkg-th-name">{pkg.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row) => (
                <tr className="pkg-row" key={row.label}>
                  <td className="pkg-td pkg-td--label">{row.label}</td>
                  {row.values.map((value, i) => (
                    <td
                      key={packages[i].id}
                      className={`pkg-td ${
                        packages[i].tag ? "pkg-td--highlight" : ""
                      }`}
                    >
                      {renderCell(value)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="pkg-row pkg-row--cta">
                <td className="pkg-td pkg-td--label">Purchase / Contact</td>
                {packages.map((pkg) => (
                  <td
                    key={pkg.id}
                    className={`pkg-td ${pkg.tag ? "pkg-td--highlight" : ""}`}
                  >
                    <button className="pkg-button" type="button">
                      {pkg.cta}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Packages;
