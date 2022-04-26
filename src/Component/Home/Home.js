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
        <div>
            <h2 className='text-center mt-4 fw-bold'>Our Rooms</h2>
        <div className='room'>
            
            
            {
                rooms.map(room=><Cart key={room._id} data={room}></Cart>)
            }
           
        </div>
        </div>
    );
};

export default Home;