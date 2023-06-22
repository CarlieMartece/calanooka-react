import "./sass/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavSite from "./components/NavSite";
import Chroma from "./components/Chroma";

function App() {
  return (
    <BrowserRouter>
    <div id="App">
      <NavSite />
      <Routes>
        <Route path="/" element={<Chroma />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
