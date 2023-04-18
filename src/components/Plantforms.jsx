import React from 'react'
import github from '../images/logo/github.png'
import vs from '../images/logo/vscode.png'
import canva from '../images/logo/canva.png'
import replit from '../images/logo/replit.png'
export default function Plantforms() {
       const experiences = [
        {
            id: 1,
            title: "GitHub",
            src: github,
            style: "shadow-orange-500",
          },
          {
            id: 2,
            title: "VSCode",
            src: vs,
            style: "shadow-orange-500",
          },
          {
            id: 3,
            title: "Canva",
            src: canva,
            style: "shadow-orange-500",
          },
          {
            id: 4,
            title: "Replit",
            src: replit,
            style: "shadow-orange-500",
          }
    ]
  return (
    <div className='w-full md:w-1/2  shadow-2xl hover:shadow-lime-900 transition-all duration-150 ease-out hover:ease-in'>
        <div className='flex text-center justify-center text-4xl font-bold p-5  text-lime-300 hover:text-lime-500 transition-all duration-150 ease-out hover:ease-in'>
           PLATFORMS
        </div>
    <div className="grid md:grid-cols-2 gap-8  ">
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
        </div>)}