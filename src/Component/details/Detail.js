import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
    const {detailid}=useParams()
    return (
        <div className='text-center'>
            <h1>This is details About room:{detailid}</h1>
            <Link  to='/shop'>
            <button className='csss-btn'>shop now</button>
            </Link>
        </div>
    );
};

export default Detail;