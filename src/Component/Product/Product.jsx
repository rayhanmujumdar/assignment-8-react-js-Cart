import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = ({product,addToCart}) => {
    const {image,name,price} = product
    return (
        <div className='col-sm-12 col-lg-6 col-md-6 my-5 d-flex justify-content-center'>
            <div className='p-3 bg-dark product-info rounded-3'>
                <img src={image} alt="" className='img-fluid product-img'/>
                <div className='text-white my-4'>
                    <h3 className='fw-normal fs-4'>Name: {name}</h3>
                    <p>Price: ${price}</p>
                    <button onClick={() => addToCart(product)} className='btn btn-success'>Add to Cart
                   <FontAwesomeIcon className={'px-1'} icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;