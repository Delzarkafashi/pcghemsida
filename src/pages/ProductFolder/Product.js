import React from 'react';
import { useCart } from '../../components/CartContext';
import '../ProductFolder/product.css';

export const productData = [
  {
    id:1,
    name: 'Vit och Blå Fotboll',
    description: 'En stilren vit och blå fotboll, lämplig för spel på gräsplaner och konstgräs.',
    price: 120,
    currency: "$",
    thumb: "./images/1.jpg"

},

{
    id:2,
    name: 'Mini Fotboll',
    description: 'En liten fotboll perfekt för yngre spelare eller för lek på mindre ytor.',
    price: 80,
    currency: "$",
    thumb: "./images/2.jpg" 
},

{
    id:3,
    name: 'Klassisk Svart och vit Fotboll',
    description: 'En traditionell svart och vit fotboll, perfekt för spontana matcher och träningssessioner.',
    price: 150,
    currency: "$",
    thumb: "./images/3.jpg"
},

{
    id:4,
    name: 'Manchester City Special Edition Fotboll',
    description: 'En exklusiv fotboll för äkta fans av Manchester City. Designad med klubbens färger och emblem.',
    price: 250,
    currency: "$",
    thumb: "./images/4.jpg"
},

{
    id:5,
    name: 'Citybike',
    description: 'En bekväm citybike för avslappnad stadscykling.',
    price: 180,
    currency: "$",
    thumb: "./images/5.jpg"
},

{
    id:6,
    name: 'Mountainbike',
    description: 'En robust mountainbike för terrängcykling.',
    price: 200,
    currency: "$",
    thumb: "./images/6.jpg"
},

{
  id:7,
  name: 'Racercykel',
  description: 'En snabb racercykel för landsvägscykling.',
  price: 300,
  currency: "$",
  thumb: "./images/7.jpg"
},

{
  id:8,
  name: 'Downhillcykel',
  description: 'En kraftfull downhillcykel för extrema nedförsbackar.',
  price: 350,
  currency: "$",
  thumb: "./images/8.jpg"
},

{
  id:9,
  name: 'Flexibel BJJ Spats',
  description: 'Flexibla BJJ spats tillverkade av stretchigt material för ökad rörelsefrihet. Perfekt för träning och grappling.',
  price: 350,
  currency: "$",
  thumb: "./images/9.jpg"
},

{
  id:10,
  name: 'Lättviktig BJJ Rashguard',
  description: 'En lättviktig rashguard designad för Brazilian Jiu-Jitsu. Tillverkad med fukttransporterande material för optimal komfort.',
  price: 400,
  currency: "$",
  thumb: "./images/10.jpg"
},

{
  id:11,
  name: 'Andningsbar BJJ Gi',
  description: 'En andningsbar T-shirt för Brazilian Jiu-Jitsu med svalkande material. Passar bra för träning eller som vardagsklädsel.',
  price: 250,
  currency: "$",
  thumb: "./images/11.jpg"
},

{
  id:12,
  name: 'Premium BJJ Gi',
  description: 'Ett premium Brazilian Jiu-Jitsu gi tillverkat av högkvalitativt bomullsmaterial. Idealiskt för träning och tävlingar.',
  price: 1200,
  currency: "$",
  thumb: "./images/12.jpg"
},
];

const Product = () => {
  const { addToCart } = useCart();

  const handleBuyClick = (product) => {
    addToCart({ ...product, quantity: 1, image: product.thumb });
    alert("Produkten lagts i korgen!")
  };

  return (
    <div className='products'>
      {productData.map((product, index) => (
        <div className="card" key={product.id}>
          <div className="card_img">
            <img src={product.thumb} alt={product.name} />
          </div>
          <h3>{product.name}</h3>
          <p>{product.price} :-</p>
          <p>{product.description}</p>
          <button 
          className='shop-buttons' 
          title='Klicka här för att lägga produkten till korgen'
          onClick={() => handleBuyClick(product)}
          >
            Köp
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;