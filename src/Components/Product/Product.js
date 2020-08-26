import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="products">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-description">
        <br/>
        <h3>{name}</h3>
        <p>
          <small>By : {seller}</small>
        </p>
        <h2>$ {price}</h2>
        <h4>Only {stock} left in stock-Order Now</h4>
        <button onClick={() => props.handleAddProduct(props.product)} className='cart-btn'>
           <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
