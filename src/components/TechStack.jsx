import React from "react";
import "../styles/techstack.css";
import All from "./All";

const TechStack = () => {
  return (
    <div
      id="exp1"
      className="overflow-hidden flex flex-auto flex-col w-screen h-auto"
    >

        <h2 className="text-7xl w-full text-center stext-center md:text-7xl tracking-wider uppercase p-3 text-white">
          Tools and Languages
        </h2>
        {/* <div className="h-auto w-full md:w-1/2 div_img mt-10">
          <All />
        </div> */}
      <div className="w-full h-4/5 flex flex-auto flex-col md:flex-row tech">
      <div className="h-auto w-full md:w-1/2 div_img mt-10">
          <All />
        </div>
        {/* card */}
        <div className="w-full md:w-1/2 h-screen md:h-full flex items-center justify-center bg-black">
          <div class=" w-full md:h-4/5 h-screen shadow-xl bg-[#032845] lg:p-8 md:ml-auto p-10">
          <div class="flex items-center gap-x-2">
            <div>
              <h3 class="text-5xl text-white font-bold text-white-500 underline decoration-blue-500 ">
                My Skills
              </h3>
            </div>
          </div>
          <div class="my-4">
            <h3 class="text-2xl font-medium text-gray-200">
              I'm passionate about building user-friendly and responsive web
              applications. I have a solid understanding of front-end and
              back-end development and I enjoy using my skills to solve complex
              problems. In addition to my technical expertise, I'm also a
              talented UI/UX designer and content writer. I'm always looking for
              new challenges and opportunities to grow my skills.
            </h3>
          </div>
        </div>
        </div>
        
        {/* <All/> */}
        {/* <h2 id="exp1" className="text-5xl w-full text-center  stext-center md:text-7xl
    text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-lime-900
     tracking-wider uppercase font-bold">
          EXPERIENCE
      </h2>
    <div id= "experience" className="flex flex-auto flex-wrap">
<Plantforms/>
<ProgLang/>
<Backend />
<Frontend />


</div> */}
      </div>
    </div>
  );
};

export default TechStack;
