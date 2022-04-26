import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {

  const {detailid}=useParams();

//  ...fdghdfgdfgdfg..

    const [newroom,setnewroom]=useState([]);
    useEffect(()=>{
        fetch(`https://sheltered-wave-47448.herokuapp.com/rooms/${detailid}`)
        .then(res=>res.json())
        .then(data=>setnewroom(data))

    },[detailid])

    return (
        <div className='text-center'>
            <h1>one page</h1>
            <h1>This is details About room:{newroom.name}</h1>
           
            <Link  to='/shop'>
            <button className='csss-btn'>shop now</button>
            </Link>
        </div>
    );
};

export default Detail;