import React from "react";
import { useLocation } from "react-router-dom";
import { Product, productData } from "../ProductFolder/Product"; // Observera import här
import { useCart } from '../../components/CartContext';
import "../SearchResultatFolder/SearchResultPage.css"

const SearchResultPage = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  // Filtrera produkter baserat på sökningen
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { addToCart } = useCart();

  const handleBuyClick = (product) => {
    addToCart({ ...product, quantity: 1, image: product.thumb });
  };

  return (
    <div className="main-search-container">
      <h2>Search Results for "{searchQuery}"</h2>

      {filteredProducts.length === 0 ? (
        <p>No results found for "{searchQuery}"</p>
      ) : (
        filteredProducts.map((product, index) => (
          <div 
          key={index}
          className="product-results"
          >
            <div className="card_img">
              <img src={product.thumb} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <p>{product.price} :-</p>
            <p>{product.description}</p>
            <button
              className="shop-buttons"
              title="Klicka här för att lägga produkten till korgen"
              onClick={() => handleBuyClick(product)}
            >
              Köp
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResultPage;
