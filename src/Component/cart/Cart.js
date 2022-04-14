import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const {name ,company,balance,picture}=props.data;
 
    

    return (
        <div className='cart-'>
            <img width='100%' height='300px' src={picture} alt="" />
            <h3 className='pt-3'>Name:{name}</h3>
            <h5>Brand:{company}</h5>
            <h6>Rent:{balance}</h6>
            
              <Link className='text-white csss ' to='/shop'><button  className=' csss-btn'>add to cart </button></Link> 
            
            
        </div>
    );
};

export default Cart;