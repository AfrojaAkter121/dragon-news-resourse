import React, { useEffect, useState } from 'react';
import Header from '../Component/Header/Header';
import RightNesw from '../Component/Main/RightNesw';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id)
        setNews(newsDetails)
    }, [data,id])

    return (
        <div>
            <header className='p-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h1 className='font-bold mb-5'>News Details</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightNesw></RightNesw>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;