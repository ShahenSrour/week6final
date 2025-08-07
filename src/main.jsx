import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";
import Header from "./Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./footer.jsx";
import {BrowserRouter as Router,Route} from 'react-router-dom';

// Wrapper component to manage shared state
function AppWrapper() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Router>
    <>
      <Header onCategorySelect={setSelectedCategory} />
      <Home cat={selectedCategory} />
      <Footer />
    </>
    </Router>
  );
}

// Render it all
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
