import "./sass/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavSite from "./components/NavSite";

function App() {
  return (
    <BrowserRouter>
    <div id="App">
      <NavSite />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
