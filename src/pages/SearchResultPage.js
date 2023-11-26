import React from "react";
import { useLocation } from "react-router-dom";
import { Product, productData } from "./Product"; // Observera import här

const SearchResultPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  // Filtrera produkter baserat på sökningen
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>

      {filteredProducts.length === 0 ? (
        <p>No results found for "{searchQuery}"</p>
      ) : (
        filteredProducts.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* ... andra produktattribut ... */}
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResultPage;
