import "./nav.css";

const nav = () => {
  return (
    <div>
        <div className="navbar">
            <img id="logo" src="./src/assets/moving logo.gif" alt="" /> 
            <div className="navcontents">
              <h4>HOME</h4>
              <h4>ABOUT US</h4>
              <h4>OUR SERVICES</h4>
              <h4>CONTACT US</h4>
              <h4>LOGIN</h4>
            </div>
        </div>
    </div>
  );
};

export default nav;