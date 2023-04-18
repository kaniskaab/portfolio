import React from 'react'
import '../styles/timeline.css'
export default function Timeline() {
  return (
    <div id="journey" className='timeline'>
      <div className="h-auto overflow-hidden flex items-center justify-center -mt-4">
    <div className="container">
    <h2 className="text-5xl w-full text-center stext-center md:text-7xl tracking-wider uppercase
     text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-lime-900 font-bold">
          journey
      </h2>
          <div
            className="flex flex-col md:grid grid-cols-9 bg-left-top mx-auto p-2 "
          >
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-white hover:shadow-cyan-500/40 transition-all text-2xl duration-150 ease-out hover:ease-in pointer-events-none mt-20 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-3xl mb-1">E-Cell Content Team Lead</h3>
                <p className="leading-tight text-justify text-2xl">
                  April 2023 and continued..
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white hover:shadow-cyan-500/40  transition-all duration-150 ease-out hover:ease-in col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold mb-1 text-3xl">Explorer session on Web Development, Organizer</h3>
                <p className="leading-tight text-justify text-2xl">
                  February 2023
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
             {/* left */}
             <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white hover:shadow-cyan-500/40  transition-all duration-150 ease-out hover:ease-in col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold mb-1 text-3xl">MetaVerse IIIT Chapter, Content and Graphics Team</h3>
                <p className="leading-tight text-justify text-2xl">
                  January 2023 and continued..
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            {/* <!-- right --> */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-white hover:shadow-cyan-500/40 transition-all duration-150 ease-out hover:ease-in pointer-events-none col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-3xl mb-1">D3 Techno Management Fest, Organizer</h3>
                <p className="leading-tight text-justify text-2xl">
                  October 2022
                </p>
              </div>
            </div>
            {/* <!-- left --> */}
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white hover:shadow-cyan-500/40 transition-all duration-150 ease-out hover:ease-in col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold mb-1 text-3xl">GDSC Web Development Team</h3>
                <p className="leading-tight text-justify text-2xl">
                 September 2022 and continued..
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            {/* right */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-white hover:shadow-cyan-500/40 transition-all duration-150 ease-out hover:ease-in pointer-events-none col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-3xl mb-1">ECell Content Team Member</h3>
                <p className="leading-tight text-justify text-2xl">
                  April 2022 and continued..
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full  bg-blue-500 shadow"
                ></div>
              </div>
              <div
                className="bg-white hover:shadow-cyan-500/40 transition-all duration-150 ease-out hover:ease-in pointer-events-none col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-semibold text-3xl mb-1">IIIT_BBSR BTech in CSE</h3>
                <p className="leading-tight text-justify text-2xl">
                  October 2021 and continued..
                </p>
              </div>
            </div>
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white hover:shadow-cyan-500/40  transition-all duration-150 ease-out hover:ease-in col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold mb-1 text-3xl">Ispat English Medium School</h3>
                <p className="leading-tight text-justify text-2xl">
                  May 2018 to Jun 2020
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>
            {/* left */}
            <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-white hover:shadow-cyan-500/40  transition-all duration-150 ease-out hover:ease-in col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-semibold mb-1 text-3xl">Deepika English Medium School</h3>
                <p className="leading-tight text-justify text-2xl">
                  May 2008 to May 2018
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                ></div>
              </div>
            </div>




          </div>
        </div>
</div>
    </div>
  )
}
