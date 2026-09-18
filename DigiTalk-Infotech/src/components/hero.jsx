import "./hero.css";
import "./right-centre"
import HeroArt from "./right-centre";

const leftcentre = () => {
  return (
    <div className="hero">
        <div className="leftcentre">
        <div id="top">
            <h4></h4>
        </div>
        <div id="mid">
            <h2>CUSTOM WEB DEVELOPMENT</h2>
            <h3>FOR YOUR VISION</h3>
        </div>
        <div id="circle-loader">
            <span class="circle circle-1"></span>
            <span class="circle circle-2"></span>
            <span class="circle circle-3"></span>
        </div>
        <div id="bottom">
            <h4> We build fast, modern and scalable websites that turn your ideas into real business results.</h4>
        </div>
        </div>

        <div className="rightcentre">
        {HeroArt()}
        </div>            
    </div>
  );
};

export default leftcentre;