import lavablock from "./components/lavablock";
import leftcentre from "./components/hero";
import nav from "./components/nav";
import Options from "./components/options";
import HowWeWork from "./components/HowWeWork";
import Statistics from "./components/Statistics";
import Packages from "./components/Packages";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {lavablock()}
      {nav()}
      {leftcentre()}
      {Options()}
      <HowWeWork />
      <Statistics />
      <Packages />
      <Technologies />
      <Footer />
    </>
  );
};

export default App;
