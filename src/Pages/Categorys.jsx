import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const Categorys = () => {
    const [categoryData, setCategoryData] = useState([])
    
    useEffect(()=> {
        fetch('../categories.json').then(res => res.json()).then(data => setCategoryData(data))
    },[])
    
    
    return (
        <div>
            <h1 className='text-xl font-semibold'>All Categories ({categoryData.length}) </h1>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categoryData.map(category => 
                    <NavLink key={category.id}
                    className={'btn bg-base-100 border-0 hover:bg-base-300'}
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categorys;