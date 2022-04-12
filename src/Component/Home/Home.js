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
        <div className='room'>
            
            {
                rooms.map(room=><Cart key="id" data={room}></Cart>)
            }
           
        </div>
    );
};

export default Home;