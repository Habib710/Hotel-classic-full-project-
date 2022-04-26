import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import './Home.css'

const Home = () => {
    const [rooms, setrooms]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3300/rooms")
        .then(res=>res.json())
        .then(data=>setrooms(data))
    
    },[])
    return (
        <div className='container'>
            <h2 className='text-center my-5 fw-bold'>Our Rooms</h2>
        <div className='room my-4'>
            
            
            {
                rooms.map(room=><Cart key={room._id} data={room}></Cart>)
            }
           
        </div>
        </div>
    );
};

export default Home;