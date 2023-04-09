import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {name, id, logo, total} = topic
    const hangleGoToQuiz = () => {

    }
    return (
        <div className='p-3 rounded-md shadow-lg w-[270px]'>
            <img className='w-[250px] bg-gray-100 rounded-md' src={logo} alt="" />
            <p>{name}</p>
            <div className='flex justify-between items-center'>
                <p>Total: {total}</p>
               <Link to={`/topic/${id}`}> <button className='bg-blue-500 px-4 py-2 rounded-md'>Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Topic;