import React, { useState, useEffect } from "react";
import "./index.css";

function Results({ cat }) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <section id="results">
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}

      {!loading && data && data.length > 0 && (
        data.map((emoji) => (
          <section key={emoji.name} className="card">
            <h1
              className="emoji"
              dangerouslySetInnerHTML={{
                __html: emoji.htmlCode?.join("") || "",
              }}
            />
            <p>Emoji Name: {emoji.name}</p>
            <p>Category: {emoji.category}</p>
          </section>
        ))
      )}

      {!loading && data && data.length === 0 && (
        <div>No emojis found.</div>
      )}
    </section>
  );
}

export default Results;
