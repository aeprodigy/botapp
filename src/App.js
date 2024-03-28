import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Facebook from "./Components/facebook";
import WhatsAppConversations from "./Components/WhatsApp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/whatsApp" element={<WhatsAppConversations />} />
      </Routes>
    </div>
  );
}

export default App;
