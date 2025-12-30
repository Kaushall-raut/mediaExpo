import { Route, Routes } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/HomePage";
import Collection from "./pages/Collection";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
