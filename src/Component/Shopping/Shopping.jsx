import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shopping.css'
const Shopping = () => {
    const [products,setProduct] = useState([]);
    const [carts,setCart] = useState([])
    const [favo,setFavo] = useState([])
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    
    const addToCart = (product) => {
        // const randomIndex = Math.round(Math.random() * carts.length)
        // product.quantity = randomIndex;
        if(carts.includes(product)){
            alert('already added')
        }else{
            const newCart = [...carts,product]
            if(newCart.length < 5){
                setCart(newCart)
            }
            else{
                alert('maxmum 4 added')
            }
        }
        
    }
    const chooseProduct = (carts) => {
        if(carts.length){
            const randomIndex = Math.floor(Math.random() * carts.length)
            const fvCart = carts.slice(randomIndex)
            if(fvCart){
                setFavo(fvCart.slice(0,1))
            } 
        }else{
            alert('please choose your fav product')
        }
        
    }   
    
    const chooseAgain = () => {
        const empty = [];
        setFavo(empty)
        setCart(empty)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-lg-9'>
                    <div className='row'>
                        {
                            products.map(product => <Product
                                key = {product.id} 
                                product = {product}
                                addToCart = {addToCart}
                                ></Product>)
                        }
                    </div>
                </div>
                <div className='cartAdded col-sm-12 col-lg-3 bg-dark rounded-3'>
                    <div className='d-flex flex-column align-item-center justify-content-center '>
                        {
                            carts.map(cart => <Cart 
                                key = {cart.id}
                                cart = {cart}></Cart>)
                        }
                        <div className='d-sm-flex justify-content-center d-lg-flex flex-lg-column m-5 text-center'>
                            <button onClick={() => chooseProduct(carts)} className='mx-4 btn bg-success text-white my-lg-3'>CHOOSE 1 FOR ME</button>
                            <button onClick={() => chooseAgain()} className='btn bg-danger text-white mt-3'>CHOOSE AGAIN</button>
                        </div>
                        <div>
                            <h1 className='text-white text-center fw-normal'>Choose For You</h1>
                            {
                                favo.map(cart => <Cart 
                                    key={cart.id}
                                    cart={cart}></Cart>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping;