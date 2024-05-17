import NewsList from "./components/News/NewsList";
import EntireFilter from "./components/Filter/EntireFilter";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <EntireFilter />
      <NewsList />
    </div>
  );
}

export default App;
