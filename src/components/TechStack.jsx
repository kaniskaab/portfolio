import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Plantforms from "./Plantforms";
import ProgLang from "./ProgLang";
import '../styles/techstack.css'

const TechStack = () => {
return(
    <div id="exp" className="w-screen h-auto tech">

    <h2 id="exp1" className="text-5xl w-full text-center  stext-center md:text-7xl
    text-transparent bg-clip-text bg-gradient-to-r from-lime-200 to-lime-900
     tracking-wider uppercase font-bold">
          EXPERIENCE
      </h2>
    <div id= "experience" className="flex flex-auto flex-wrap">
<Plantforms/>
<ProgLang/>
<Backend />
<Frontend />


</div>

</div>
)


};

export default TechStack;
