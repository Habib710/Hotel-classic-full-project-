import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
    const {name ,company,balance,picture,_id}=props.data;
    const naviget=useNavigate();

    const addtocart = id => {
        console.log(id);
        

       naviget(`/detail/${id}`);
    }
 
    

    return (
        <div className='cart-'>
            <img width='100%' height='300px' src={picture} alt="img" />
            <h4 className='my-4'>{name}</h4>
            <h5>Brand:{company}</h5>
            <h6>Rent:{balance}</h6>
            
             <button onClick={()=>addtocart(_id)}  className=' csss-btn my-2'>add to cart </button> 
            
            
        </div>
    );
};

export default Cart;