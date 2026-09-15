import lavablock from "./components/lavablock";
import leftcentre from "./components/left centre";
import nav from "./components/nav";

const App = () => {
  return (
    <>
    {lavablock()}
    {nav()}
    {leftcentre()}
    </>
  );
};

export default App;