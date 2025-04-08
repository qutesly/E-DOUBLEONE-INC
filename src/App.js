import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/Footer/Footer-component";

function App() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Home />
      <FooterComponent />
    </div>
  );
}

export default App;
