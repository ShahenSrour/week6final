import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Results({ cat }) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const endpoint = cat
        ? `https://emojihub.yurace.pro/api/all/category/${cat}`
        : `https://emojihub.yurace.pro/api/all`;

      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  let displayedData = data || [];

  if (sortOrder === "asc") {
    displayedData = [...data].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  } else if (sortOrder === "desc") {
    displayedData = [...data].sort((a, b) =>
      b.name.toLowerCase().localeCompare(a.name.toLowerCase())
    );
  }

  const cycleSortOrder = () => {
    if (sortOrder === "default") setSortOrder("asc");
    else if (sortOrder === "asc") setSortOrder("desc");
    else setSortOrder("default");
  };

  const sortLabel =
    sortOrder === "default"
      ? "Sort by Name: Default"
      : sortOrder === "asc"
      ? "Sort by Name: Ascending"
      : "Sort by Name: Descending";

  return (
    <section id="results">
      <button onClick={cycleSortOrder} className="sort-button">
        {sortLabel}
      </button>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}

      {!loading &&
        data &&
        displayedData.map((emoji) => (
          <Link
            key={emoji.htmlCode.join("")} // unique key for React
            to={`/emoji/${encodeURIComponent(emoji.htmlCode.join(""))}`}
            state={{ emoji }}
            className="link-card-styling"
          >
            <section className="card">
              <h1
                className="emoji"
                dangerouslySetInnerHTML={{
                  __html: emoji.htmlCode?.join("") || "",
                }}
              />
              <p>Emoji Name: {emoji.name}</p>
              <p>Category: {emoji.category}</p>
            </section>
          </Link>
        ))}

      {!loading && data && data.length === 0 && <div>No emojis found.</div>}
    </section>
  );
}

export default Results;
