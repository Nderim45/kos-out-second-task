import React from 'react'
import Question from './Question'

const askedQuestions =[
    {
        question: 'Why park a domain name in Parkname ?',
        answer: 'Parkname is the leadin industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achive success.'
    },
    {
        question: 'Why park a domain name in Parkname ?',
        answer: 'Parkname is the leadin industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achive success.'
    },
    {
        question: 'Why park a domain name in Parkname ?',
        answer: 'Parkname is the leadin industry standard for domain name parking and monetization services. We offer a wide variety of services to help you achive success.'
    }
]
const Questions = (props) => {
    return (
        <div>
        {askedQuestions.map(item => (
            <Question type={props.type} question={item.question} answer={item.answer} />
            ))}
        </div>
    )
}

export default Questions
