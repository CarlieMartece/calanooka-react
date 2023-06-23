import "./sass/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavSite from "./components/NavSite";
import Chroma from "./components/Chroma";
import ChromaSphere from "./components/ChromaSphere";

function App() {
  return (
    <BrowserRouter>
    <div id="App">
      <NavSite />
      <Routes>
        <Route path="/" element={<Chroma />} />
        <Route path="/css/:sphereId" element={<ChromaSphere />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
