import React from "react";
import Navbar from "./NavBar";
import "../styles/hero.css";
export default function Hero() {
  return (
    <div className="main_hero w-screen">
       
      <body className=" hero_card h-full w-full overflow-hidden flex flex-wrap items-center justify-center bg-black">
         <Navbar/>
        <div className="flex mr-auto min-h-screen w-full items-center md:w-2/3 justify-center px-5  font-bold text-white">
          <div className=" tracking-tight hover:tracking-wide text-center space-y-12 transition-all duration-150 ease-out hover:ease-in">
            <div className="text-center text-7xl font-bold">
              <div className="text-4xl">Hie! I'm Kaniskaa, and I'm a <span className="underline decoration-sky-500">developer</span></div>
              Services offered
              <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden">
                <span className="animate-word col-span-full row-span-full">
                  Website
                </span>
                <span className="animate-word-delay-1 col-span-full row-span-full">
                  Front End
                </span>
                <span className="animate-word-delay-2 col-span-full row-span-full">
                 Back End
                </span>
                <span className="animate-word-delay-3 col-span-full row-span-full">
                  UI/UX
                </span>
                <span className="animate-word-delay-4 col-span-full row-span-full">
                  Content
                </span>
              </div>
            </div>
            <p class=" text-white text-3xl">
              Want to hire me for work ping me{" "}
              <a class="underline" href="mailto:kaniskaab33@gmail.com">
                mail here
              </a>
            </p>
          </div>
        </div>
        <div className="flex mr-auto min-h-screen w-full object-right-bottom items-center md:w-1/3 justify-center px-5 font-bold text-white hero_card2" >
            

            {/* the card */}
          <div>
            <div class="group p-4 shadow-2xl shadow-black transition-all duration-300 hover:rotate-3 lg:p-8">
              <div class="mb-3 text-right">
                <button class="text-gray-50 transition-all duration-300 hover:scale-110 hover:text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </button>
              </div>
              <div class="flex items-center gap-x-2">
                <div className="logo">

                </div>
                <div>
                  <h3 class="text-2xl font-bold text-gray-50">IIIT_BBSR</h3>
                  <span class=" text-gray-300">Gothapatna, Bhubaneswar</span>
                </div>
              </div>
              <div class="my-4">
                <h3 class="text-5xl font-medium text-gray-200">
                  Full Stack Web Developer
                </h3>
                <div class="text-sm font-medium">
                  <span class="m-1 ml-0 inline-block text-blue-500">HTML</span>
                  <span class="m-1 ml-0 inline-block text-yellow-500">CSS</span>
                  <span class="m-1 ml-0 inline-block text-pink-500">JavaScript</span>
                  <span class="m-1 ml-0 inline-block text-lime-500">
                    React
                  </span>
                  <span class="m-1 ml-0 inline-block text-blue-500">
                    Tailwind
                  </span>
                  <span class="m-1 ml-0 inline-block text-yellow-500">
                    NodeJs
                  </span>
                  <span class="m-1 ml-0 inline-block text-pink-500">
                    MongoDB
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class=" font-medium text-gray-50">Fresher</span>
                <a class="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
