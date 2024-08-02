import css from "../assets/css.png";
import javascrpit from "../assets/javascript.png";
import java from "../assets/java.png";
import html from "../assets/html.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";

function Skills() {
  return (
    <div className="on-load bg-black text-gray-400 max-w-[1200px] md:h-[150px] mx-auto grid grid-cols-3 md:flex md:justify-center md:items-center place-items-center">
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={javascrpit} alt="js" />
        <p className="mt-2">Javascript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={react} alt="React" />
        <p className="mt-2">React</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={nodejs} alt="Nodejs" />
        <p className="mt-2">Node.js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={mongodb} alt="mongodb" className="scale-150" />
        <p className="mt-2">MongoDB</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={html} alt="html" className="" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={css} alt="html" className="" />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={tailwind} alt="html" className="" />
        <p className="mt-2">TailwindCSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={java} alt="html" className="" />
        <p className="mt-2">Java</p>
      </div>
    </div>
  );
}

export default Skills;
