import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {name ,company,balance,picture,about}=props.data;
 
    

    return (
        <div className='cart-'>
            <img width='350px' src={picture} alt="" />
            <h3>Name:{name}</h3>
            <h6>Brand:{company}</h6>
            <p>Rent:{balance}</p>
            <button className='btn bg-primary text-white'>add to cart</button>
            
            
        </div>
    );
};

export default Cart;