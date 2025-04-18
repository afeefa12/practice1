import React, { useState } from 'react'

const Question = () => {
    const tasks = [
        {question: "what is javascript?", answer: "javascript is....."}
        {question: " why use javascript?", "javascript allows dynamic content updates...."}
        {question: "Is javascript frontend or backend?", answer: "javascript is primarily used for frontend development...."}
    ]

    const [isActive, setIsActive] = useState(null);

    const toggle = (index) => {
        setIsActive(isActive === index ? null : index);

    };
  return (
    <div className='w-96 mx-auto mt-5'>
        {tasks.map((task, index) =>(
            <div key = {index} className="border-b-2  border-gray-300 p-3">
                <div 
                 onClick={() => toggle(index)}
                    className='cursor-pointer font-semibold flex justify-between'>
                        {task.question}
                        <span>{isActive == index ? "<" : ">"}</span>
                    </div>
                    {isActive === index && <div className='"mt-2 text-gray-700">{task.answer}</div>}
       
    </div>
     ))}
     </div>
  );
};

export default Question;