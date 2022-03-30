import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{addToCart}=props
    
    const{name,img,price,ratings,seller}=props.product
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='produc-info'>
                <h3 className='produc-name'>{name}</h3>
                <p className='produc-price'>Price: ${price}</p>
                <p className='produc-seller'>Manufacturer : {seller}</p>
                <p className='produc-rating'>Rating : {ratings} start</p>
            </div>
            <button onClick={()=>addToCart(props.product)} className='produc-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
                
            </button>
        </div>
    );
};

export default Product;