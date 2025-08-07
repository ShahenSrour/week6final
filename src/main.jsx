import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./index.css";
import Header from "./Header.jsx";
import Landing from "./Landing.jsx";
import Results from "./Results.jsx";
import Footer from "./footer.jsx";

// Wrapper component to manage shared state
function AppWrapper() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Header onCategorySelect={setSelectedCategory} />
      <Landing />
      <Results cat={selectedCategory} />
      <Footer />
    </>
  );
}

// Render it all
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);
