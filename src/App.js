import React from "react";
import "./App.css";
import Controls from "./components/controls";
import Results from "./components/results";
import Search from "./components/search";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container dictionary">
      <Search />
      <Results />
      <Controls />
    </div>
  );
}

export default App;
