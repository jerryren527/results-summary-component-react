import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";

import data from "./data.json";
import { ReactComponent as ReactionLogo } from "./assets/images/icon-reaction.svg";
import { ReactComponent as MemoryLogo } from "./assets/images/icon-memory.svg";
import { ReactComponent as VerbalLogo } from "./assets/images/icon-verbal.svg";
import { ReactComponent as VisualLogo } from "./assets/images/icon-visual.svg";

data[0].icon = <ReactionLogo />;
data[1].icon = <MemoryLogo />;
data[2].icon = <VerbalLogo />;
data[3].icon = <VisualLogo />;

console.log(data);

function App() {
  return (
    <div className="App">
      <main>
        <div id="absolute-position-container">
          <div id="flex-container">
            <Hero />
            <Summary data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
