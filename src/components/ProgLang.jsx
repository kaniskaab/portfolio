import React from 'react'
import c from '../images/logo/c.png'
import cp from '../images/logo/c++.png'
import python from '../images/logo/python.png'

export default function ProgLang() {
    const experiences = [
        {
            id: 1,
            title: "C++",
            src: cp,
            style: "shadow-orange-500",
          },
          {
            id: 2,
            title: "C",
            src: c,
            style: "shadow-orange-500",
          },
          {
            id: 3,
            title: "Python",
            src: python,
            style: "shadow-orange-500",
          },
    ]
  return (
    <div className='w-full md:w-1/2 shadow-2xl hover:shadow-lime-900 transition-all duration-150 ease-out hover:ease-in '>
        <div className='flex text-center justify-center text-4xl font-bold p-5  text-lime-300 hover:text-lime-500 transition-all duration-150 ease-out hover:ease-in'>
           PROGRAMMING LANGUAGES
        </div>
    <div className="grid md:grid-cols-2 gap-8 ">
    {experiences.map(({ id, title, src, style }) => (
            <div
              key={id}
              className="bg-green-300 w-20 h-20 m-8 static rounded-lg"
            >
              <div className="bg-white w-20 h-20 hover:-m-2 text-center flex-col items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                <img src={src} width="70px" height="70px" alt={title} className='ml-1'/>
                <div>
                  <h1  className="m-4 text-3xl -mt-1 text-white font-bold">{title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>)
}
