import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const Quiz = () => {
    const {data} = useLoaderData()
    const {name, logo, total, questions} = data
    console.log(questions);
    return (
        <div className='flex justify-center'>
            <div>
                <h1>Topic : {name}</h1>
                <p>Total Questions: {total}</p>
                <div>
                    {
                        questions.map(question => <Question
                            key={question.id}
                            question={question}
                        ></Question>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;