import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";
import Header from "./Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Emoji from "./pages/Emoji.jsx";

function AppWrapper() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const number = 1;

  return (
    <Router>
      <Header onCategorySelect={setSelectedCategory} />
      <Routes>
        <Route path="/" exact element={<Home cat={selectedCategory} />} />
        <Route path="/emoji/:id" exact element={<Emoji />} />
      </Routes>
      <Footer />
    </Router>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
