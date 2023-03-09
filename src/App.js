import { Hero } from "./components/Hero";
import { Summary } from "./components/Summary";

function App() {
  return (
    <div className="App">
      <main>
        <div id="absolute-position-container">
          <div id="flex-container">
            <Hero />
            <Summary />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
