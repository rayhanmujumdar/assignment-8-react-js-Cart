import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    const {image,name,price} = cart
    return (
            <div className='text-center text-white d-flex justify-content-between align-item-center py-4'>
                <img src={image} alt="" className='img-fluid cart-img'/>
                <p className='fw-normal m-0'>{name}</p>
                <p className='bg-success text-center p-3 rounded-pill'>${price}</p>
            </div>
    );
};

export default Cart;