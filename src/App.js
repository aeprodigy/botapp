import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Facebook from "./Components/facebook";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/facebook" element={<Facebook />} />
      </Routes>
    </div>
  );
}

export default App;
