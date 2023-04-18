import React from 'react'
import me from '../images/pic2.png'
import linkedin from '../images/logo/linkedin.png'
import github from '../images/logo/github.png'
import facebook from '../images/logo/facebook.png'
import instagram from '../images/logo/instagram.png'
import "../styles/contact.css"
export default function Contact() {
  const socials = [
    {
        id: 1,
        title: "LinkedIn",
        src: linkedin,
        link: "https://www.linkedin.com/in/kaniskaa-behera-b30b53145/"
      },
      {
        id: 2,
        title: "Github",
        src: github,
        link:"https://github.com/kaniskaab"
      },
      {
        id: 3,
        title: "Facebook",
        src: facebook,
        link:"https://www.instagram.com/why_kaniskaa_/"
      },
      {
        id: 4,
        title: "Instagram",
        src: instagram,
        link:"https://m.facebook.com/kaniskaa.behera"
      },
]
  return (
    <div id="contact" className='flex-col justify-center'>
      <div>
         <h2 className="text-5xl w-full text-center stext-center md:text-7xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-lime-900 font-bold">
          CONTACT
      </h2>
      </div>
      
      <div className='flex flex-col md:flex-row justify-center'>
       <div className='w-1/2 h-50 flex justify-center items-center '>
       <img src={me} alt="profile pic" height="600px" width="600px"/>
      </div>
      <div className='w-1/2 h-50 flex flex-col justify-between '>
      {/* <div className="grid md:grid-cols-1 m-9 transition-all duration-150 ease-out hover:ease-in"> */}
      <div className="flex flex-auto flex-col justify-center items-center m-9 transition-all duration-150 ease-out hover:ease-in">
          {socials.map(({ id, title, src, link }) => (
            <div
              key={id}
              className="bg-lime-300 w-40 h-10 m-2 static rounded-lg"
            >
              <div className="bg-black text-blue-500  font-light w-40 h-10 hover:-m-2 text-center flex items-center absolute rounded-lg shadow-lg hover:shadow-xl transition-all duration-150 ease-out hover:ease-in"
              >
                <img src={src} width="30px" height="30px" alt={title} />
                <div>
                  <h1 className="m-4 text-xl font-bold">{title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> 
      </div>
      
    </div>
  )
}
