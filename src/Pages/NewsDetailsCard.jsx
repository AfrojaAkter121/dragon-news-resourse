import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover rounded-2xl' src={news.image_url} alt=""  />
            <h1 className='text-2xl'>{news.title}</h1>
            <p className='text-gray-500'>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;