import React from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Home = () => {
    const {data} = useLoaderData()
    console.log(data);
    return (
        <>
            <Header />
            <div className='grid lg:grid-cols-4 gap-5'>
                {
                    data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </>
    );
};

export default Home;