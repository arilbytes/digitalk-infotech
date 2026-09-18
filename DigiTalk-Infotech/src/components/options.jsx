import "./options.css";

const options = () => {
  return (
    <div className="card">

      <div className="service-box box-1">
        <img src="./src/assets/WEB DEV ART.png" alt="Professional Web Dev" />

        <div className="service-content">
          <h3>Web Development</h3>

          <p>
            Modern, responsive websites designed to represent your brand
            and convert visitors into customers.
          </p>

          <button>Contact Now</button>
        </div>
      </div>

      <div className="service-box box-2">
        <img src="./src/assets/App devart.png" alt="" />

        <div className="service-content">
          <h3>Mobile App Development</h3>

          <p>
            Fast, scalable and reliable web applications built around
            your business requirements.
          </p>

          <button>Contact Now</button>
        </div>
      </div>

      <div className="service-box box-3">
        <img src="./src/assets/sytem design art.png" alt="" />

        <div className="service-content">
          <h3>System Design Solutions</h3>

          <p>
            Automated deployments, cloud infrastructure and CI/CD
            pipelines for modern applications.
          </p>

          <button>Contact Now</button>
        </div>
      </div>
      <div className="service-box box-3">
        <img src="./src/assets/logo design art.png" alt="" />

        <div className="service-content">
          <h3>Creative Logo Designing</h3>

          <p>
            Automated deployments, cloud infrastructure and CI/CD
            pipelines for modern applications.
          </p>

          <button>Contact Now</button>
        </div>
      </div>
      

    </div>
  );
};

export default options;