import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import './Home.css'

const Home = () => {
    const [rooms, setrooms]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setrooms(data))



    },[])
    return (
        <div>
            <h2 className='text-center mt-4 fw-bold'>Our Rooms</h2>
        <div className='room'>
            
            
            {
                rooms.map(room=><Cart key="id" data={room}></Cart>)
            }
           
        </div>
        </div>
    );
};

export default Home;