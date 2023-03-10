import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";

import data from "./data.json";

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
