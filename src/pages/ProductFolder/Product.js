// src/pages/Product.js
// import React from 'react';
// import { useCart } from '../../components/CartContext';
// import './product.css';

// // Export productData
// export const productData = [
//   {
//     name: 'Produktnamn 1',
//     price: 19.99,
//     // other product attributes...
//   },
//   {
//     name: 'Produktnamn 2',
//     price: 24.99,
//     // other product attributes...
//   },
//   {
//     name: 'Produktnamn 3',
//     price: 29.99,
//     // other product attributes...
//   },
// ];


// const Product = () => {
//   const { addToCart } = useCart();

//   const handleBuyClick = (product) => {
    
//     addToCart(product);
//   };

//   return (
//     <div className='products'>
//       {productData.map((product, index) => (
//         <div key={index}>
//           <h3>{product.name}</h3>
//           <p>{product.price}</p>
//           <button onClick={() => handleBuyClick(product)}>Köp</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;

// src/pages/Product.js
import React from 'react';
import { useCart } from '../../components/CartContext';
import '../ProductFolder/product.css';

// Export productData
export const productData = [
  {
    id:1,
    name: "Cykel",
    description: "lorem lorem lorem lorem",
    price: 299,
    currency: "$",
    thumb: "./images/1.jpg"

},

{
    id:2,
    name: "Football",
    description: "lorem lorem lorem lorem",
    price: 99,
    currency: "$",
    thumb: "./images/2.jpg" 
},

{
    id:3,
    name: "fotballskor",
    description: "lorem lorem lorem lorem",
    price: 199,
    currency: "$",
    thumb: "./images/3.jpg"
},

{
    id:4,
    name: "Sportcykel1",
    description: "lorem lorem lorem lorem",
    price: 19,
    currency: "$",
    thumb: "./images/4.jpg"
},

{
    id:5,
    name: "Sportcykel1",
    description: "lorem lorem lorem lorem",
    price: 19,
    currency: "$",
    thumb: "./images/5.jpg"
},

{
    id:6,
    name: "Sportcykel1",
    description: "lorem lorem lorem lorem",
    price: 19,
    currency: "$",
    thumb: "./images/6.jpg"
},

{
  id:7,
  name: "Sportcykel1",
  description: "lorem lorem lorem lorem",
  price: 19,
  currency: "$",
  thumb: "./images/7.jpg"
},

{
  id:8,
  name: "Sportcykel1",
  description: "lorem lorem lorem lorem",
  price: 19,
  currency: "$",
  thumb: "./images/8.jpg"
},

{
  id:9,
  name: "Sportcykel1",
  description: "lorem lorem lorem lorem",
  price: 19,
  currency: "$",
  thumb: "./images/9.jpg"
},

{
  id:10,
  name: "Sportcykel1",
  description: "lorem lorem lorem lorem",
  price: 19,
  currency: "$",
  thumb: "./images/10.jpg"
},

{
  id:11,
  name: "Sportcykel1",
  description: "lorem lorem lorem lorem",
  price: 19,
  currency: "$",
  thumb: "./images/11.jpg"
},

{
  id:12,
  name: "Sportcykel1",
  description: "lorem lorem lorem lorem",
  price: 19,
  currency: "$",
  thumb: "./images/12.jpg"
},

];


const Product = () => {
  const { addToCart } = useCart();

  const handleBuyClick = (product) => {
    
    addToCart(product);
  };

  return (
    <div className='products'>
      {productData.map((product, index) => (
        <div className="card" key={product.id}>
        <div className="card_img">
        <img src={product.thumb} alt={product.name} />
        </div>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button className='shop-buttons' onClick={() => handleBuyClick(product)}>Köp</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
