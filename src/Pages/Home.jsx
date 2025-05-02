import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/category/1");
    }, [navigate]);

    return null;
};

export default Home;