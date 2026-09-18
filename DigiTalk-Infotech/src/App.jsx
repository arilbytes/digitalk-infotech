import lavablock from "./components/lavablock";
import leftcentre from "./components/hero";
import nav from "./components/nav";
import Options from "./components/options";
import HowWeWork from "./components/files/HowWeWork";
import Statistics from "./components/files/Statistics";
import Technologies from "./components/files/Technologies";
import Packages from "./components/files/Packages";
import Footer from "./components/files/Footer"

const App = () => {
  
  return (
    <>
    {lavablock()}
    {nav()}
    {leftcentre()}
    {Options()}
    {HowWeWork()}
    {Statistics()}
    {Packages()}
    {Technologies()}\
    {Footer()}
    </>
  );
};

export default App;