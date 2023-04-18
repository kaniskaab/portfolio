import React from "react";
import html from "../images/logo/html.png";
import css from "../images/logo/css.png";
import javascript from "../images/logo/javascript.png";
import reactImage from "../images/logo/react.png";
import tailwind from "../images/logo/tailwind.png";

export default function Frontend() {
  const experiences = [
    {
      id: 1,
      title: "HTML",
      src: html,
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      src: css,
      style: "shadow-orange-500",
    },
    {
      id: 3,
      title: "JavaScript",
      src: javascript,
      style: "shadow-orange-500",
    },
    {
      id: 4,
      title: "React",
      src: reactImage,
      style: "shadow-orange-500",
    },
    {
      id: 5,
      title: "Tailwind",
      src: tailwind,
      style: "shadow-orange-500",
    },
  ];
  return (
    <div className="w-full md:w-1/2 shadow-2xl hover:shadow-lime-900 transition-all duration-150 ease-out hover:ease-in ">
      <div className="flex text-center justify-center text-4xl font-bold p-5  text-lime-300 hover:text-lime-500 transition-all duration-150 ease-out hover:ease-in">
        FRONTEND
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
                  <h1  className="m-4 -mt-1 text-3xl text-white font-bold">{title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )}