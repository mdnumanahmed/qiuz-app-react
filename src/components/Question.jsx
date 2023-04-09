import React from 'react';

const Question = (props) => {
    const {question, options, correctAnswer} = props.question;
    const newQuestion = question.replace(/(<([^>]+)>)/ig, '')
    return (
        <div>
            <h1>{newQuestion}</h1>
            <div>
                {options.map((op, i) => <li key={i}>{op}</li>)}
            </div>
        </div>
    );
};

export default Question;