import React, { useContext } from 'react'
import product_data from "../data/product_data"; // ollo
import { ShopContext } from '../context/shop-context'; 


// ädrat
const Product = () =>{
    const {} = useContext(ShopContext);
    console.log(product_data);
    const listItems = product_data.map((item) => 
    <div className="card" key= {item.id}>
        <div className="card_img" alt=" ">
            <img src = {item.thumb} />
        </div>
       <div className="card_header">
           <h2>{item.product_name}</h2>
           <p>{item.description}</p>
           <p className="price">{item.price}<span>{item.currency}</span></p>
           <div className="btn">Add to cart</div>

       </div>
    </div>
    
    
    );
    return(
        <div className="main_content">
            <h3>Football</h3>
            {listItems}
        </div>
    )
}  // macha var
export default Product;