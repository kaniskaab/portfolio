// import React from 'react'
// import me from '../images/pic2.png'
// import linkedin from '../images/logo/linkedin.png'
// import github from '../images/logo/github.png'
// import facebook from '../images/logo/facebook.png'
// import instagram from '../images/logo/instagram.png'
// import "../styles/contact.css"
// export default function Contact() {
//   const socials = [
//     {
//         id: 1,
//         title: "LinkedIn",
//         src: linkedin,
//         link: "https://www.linkedin.com/in/kaniskaa-behera-b30b53145/"
//       },
//       {
//         id: 2,
//         title: "Github",
//         src: github,
//         link:"https://github.com/kaniskaab"
//       },
//       {
//         id: 3,
//         title: "Facebook",
//         src: facebook,
//         link:"https://www.instagram.com/why_kaniskaa_/"
//       },
//       {
//         id: 4,
//         title: "Instagram",
//         src: instagram,
//         link:"https://m.facebook.com/kaniskaa.behera"
//       },
// ]
//   return (
//     <div id="contact" className='flex-col justify-center'>
//       <div>
//          <h2 className="text-5xl w-full text-center stext-center md:text-7xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-lime-900 font-bold">
//           CONTACT
//       </h2>
//       </div>
      
//       <div className='flex flex-col md:flex-row justify-center'>
//        <div className='w-1/2 h-50 flex justify-center items-center '>
//        <img src={me} alt="profile pic" height="600px" width="600px"/>
//       </div>
//       <div className='w-1/2 h-50 flex flex-col justify-between '>
//       {/* <div className="grid md:grid-cols-1 m-9 transition-all duration-150 ease-out hover:ease-in"> */}
//       <div className="flex flex-auto flex-col justify-center items-center m-9 transition-all duration-150 ease-out hover:ease-in">
//           {socials.map(({ id, title, src, link }) => (
//             <div
//               key={id}
//               className="bg-lime-300 w-40 h-10 m-2 static rounded-lg"
//             >
//               <div className="bg-black text-blue-500  font-light w-40 h-10 hover:-m-2 text-center flex items-center absolute rounded-lg shadow-lg hover:shadow-xl transition-all duration-150 ease-out hover:ease-in"
//               >
//                 <img src={src} width="30px" height="30px" alt={title} />
//                 <div>
//                   <h1 className="m-4 text-xl font-bold"><a href={link}>{title}</a></h1>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> 
//       </div>
      
//     </div>
//   )
// }
import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className='bg-[#032845] flex flex-col justify-center text-3xl items-center overflow-hidden'>
       <div>
          <h2 className="text-7xl w-full text-center stext-center md:text-7xl tracking-wider uppercase p-3 text-white">
          Contact
      </h2>  
        </div>
      <form className="w-full max-w-lg" action='https://getform.io/f/5eecec90-0c0e-4ac8-9eb4-40e2adb687c0' method='POST'>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-white font-bold mb-2 text-3xl" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full text-3xl bg-gray-200 text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" name="FirstName"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-white text-3xl font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full text-3xl bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="LastName"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-3xl font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-white text-3xl border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email"/>
      <p className="text-white text-2xl italic">Share your feedback</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-3xl font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-3xl border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" name="message"></textarea>    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
    </div>
  )
}
//add 
