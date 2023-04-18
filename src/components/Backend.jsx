import React from 'react'
import node from "../images/logo/node.png";
import mongo from "../images/logo/mongo.png";
export default function Backend() {
    const experiences = [
        
            {
                id: 1,
                title: "Node JS",
                src: node,
                style: "shadow-orange-500",
              },
              {
                id: 2,
                title: "MongoDB",
                src: mongo,
                style: "shadow-orange-500",
              },
    ]
  return (
    <div className='w-full md:w-1/2 h-auto shadow-2xl hover:shadow-lime-900 transition-all duration-150 ease-out hover:ease-in'>
        <div className='flex text-center justify-center text-4xl font-bold p-5 text-lime-300 hover:text-lime-500 transition-all duration-150 ease-out hover:ease-in'>
           BACKEND
        </div>
    <div className="grid bg-transparent md:grid-cols-2 gap-8">
    {experiences.map(({ id, title, src, style }) => (
            <div
              key={id}
              className="bg-green-300 w-20 h-20 m-8 static rounded-lg"
            >
              <div className="bg-white w-20 h-20 hover:-m-2 text-center flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                <img src={src} width="100px" height="100px" alt={title} />
                <div>
                  <h1  className="m-4 text-3xl text-white font-bold -mt-1">{title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
