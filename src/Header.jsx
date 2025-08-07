import React, { useState } from "react";
import book from "./assets/download.gif";

function Header({ onCategorySelect }) {
  const [tempCategory, setTempCategory] = useState("");

  const handleSubmit = () => {
    onCategorySelect(tempCategory); // send selected category to parent
  };

  return (
    <header>
      <nav>
        <div className="nav__left">
          <figure>
            <img className="nav__logo" src={book} alt="Logo" />
          </figure>
          <h1>Java Search</h1>
        </div>

        <div className="nav__right">
          <label className="search_label" htmlFor="search">
            Search
          </label>
          <select
            id="search"
            value={tempCategory}
            onChange={(e) => setTempCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="smileys-and-people">Smileys</option>
            <option value="animals-and-nature">Animals</option>
            <option value="food-and-drink">Food</option>
            <option value="travel-and-places">Travel</option>
            <option value="activities">Activities</option>
            <option value="objects">Objects</option>
            <option value="symbols">Symbols</option>
            <option value="flags">Flags</option>
          </select>
          <button className="Submit" onClick={handleSubmit}>
            <span className="white">Submit</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
