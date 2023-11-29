
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <div style={{ marginTop: "10px", padding: "0px 10px"}}>
      <input
        className="search-input"
        type="text"
        placeholder="Sök..."
        title="Skriv en produkt"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "5px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSearch}
        title="Klicka här för att söka"
        style={{
          padding: "8px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Sök
      </button>
    </div>
  );
}

export default SearchBar;
