import React, { useState } from 'react';

const Question = () => {
  const tasks = [
    { question: "What is JavaScript?", answer: "JavaScript is a programming language used to make web pages interactive." },
    { question: "Why use JavaScript?", answer: "JavaScript allows dynamic content updates, user interaction, and more on websites." },
    { question: "Is JavaScript frontend or backend?", answer: "JavaScript is primarily used for frontend development, but it can also be used on the backend with Node.js." }
  ];

  const [isActive, setIsActive] = useState(null);

  const toggle = (index) => {
    setIsActive(isActive === index ? null : index);
  };

  return (
    <div className='w-96 mx-auto mt-5'>
      {tasks.map((task, index) => (
        <div key={index} className="border-b-2 border-gray-300 p-3">
          <div 
            onClick={() => toggle(index)}
            className='cursor-pointer font-semibold flex justify-between'>
            {task.question}
            <span>{isActive === index ? "<" : ">"}</span>
          </div>
          {isActive === index && (
            <div className='mt-2 text-gray-700'>
              {task.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;
