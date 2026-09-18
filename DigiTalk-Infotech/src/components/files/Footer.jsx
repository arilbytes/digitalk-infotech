import "./Footer.css";

const brand = {
  name: "Digitalk Infotech",
  description:
    "We design and build fast, modern websites and applications that turn ideas into real business results.",
};

const linkColumns = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "E-Commerce", href: "#" },
      { label: "Custom Software", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "How We Work", href: "#" },
      { label: "Packages", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Technologies",
    links: [
      { label: "React", href: "#" },
      { label: "Node.js", href: "#" },
      { label: "PHP", href: "#" },
      { label: ".NET", href: "#" },
      { label: "Shopify", href: "#" },
      { label: "WordPress", href: "#" },
    ],
  },
];

const contact = {
  email: "support@digitalkinfotech.com",
  phone: "+91 9354502385",
  location: "Visit Loation : Building No.53, 3rd Floor, 773, New, near Metro Pillar, Dwarka Mor, Block D, Sewak Park, Dwarka, Delhi, 110059",
};

const socials = [
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
  { label: "GitHub", short: "gh", href: "#" },
  { label: "Facebook", short: "fb", href: "#" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr-footer">
      <div className="ftr-inner">
        <div className="ftr-top">
          <div className="ftr-brand">
            <h2 className="ftr-brand-name">{brand.name}</h2>
            <p className="ftr-brand-desc">{brand.description}</p>

            <ul className="ftr-contact">
              <li>{contact.email}</li>
              <li>{contact.phone}</li>
              <li>{contact.location}</li>
            </ul>
          </div>

          <div className="ftr-columns">
            {linkColumns.map((col) => (
              <div className="ftr-column" key={col.title}>
                <h4 className="ftr-column-title">{col.title}</h4>
                <ul className="ftr-column-list">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="ftr-bottom">
          <p className="ftr-copyright">
            © {year} {brand.name}. All rights reserved.
          </p>

          <div className="ftr-socials">
            {socials.map((social) => (
              <a
                href={social.href}
                key={social.label}
                className="ftr-social"
                aria-label={social.label}
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
