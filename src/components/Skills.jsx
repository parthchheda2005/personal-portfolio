import css from "../assets/css.png";
import javascrpit from "../assets/javascript.png";
import java from "../assets/java.png";
import html from "../assets/html.png";
import mongodb from "../assets/mongodb.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import cpp from "../assets/cpp.png";
import ts from "../assets/ts.png";
import expressjs from "../assets/expressjs.png";

function Skills({}) {
  return (
    <div className="overflow-hidden bg-black text-gray-400 max-w-[1250px] mx-auto flex gap-6">
      <div className="md:animate-loop-scroll md:flex items-center space-x-8 mx-auto grid grid-cols-3 ">
        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4 gap-2">
          My <br /> Tech <br /> Stack
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={javascrpit} alt="js" />
          <p className="mt-2">Javascript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={react} alt="React" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={nodejs} alt="Nodejs" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={mongodb} alt="mongodb" className="scale-150" />
          <p className="mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={ts} alt="html" className="" />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={html} alt="html" className="" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={css} alt="html" className="" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={expressjs} alt="html" className="" />
          <p className="mt-2">Express JS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={tailwind} alt="html" className="" />
          <p className="mt-2">TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={java} alt="html" className="" />
          <p className="mt-2">Java</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={cpp} alt="html" className="" />
          <p className="mt-2">C++</p>
        </div>
      </div>
      <div
        className="lg:animate-loop-scroll items-center space-x-8 hidden lg:flex"
        aria-hidden="true"
      >
        <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
          My <br /> Tech <br /> Stack
        </h2>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={javascrpit} alt="js" />
          <p className="mt-2">Javascript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={react} alt="React" />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={nodejs} alt="Nodejs" />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={ts} alt="html" className="" />
          <p className="mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={mongodb} alt="mongodb" className="scale-150" />
          <p className="mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={html} alt="html" className="" />
          <p className="mt-2">HTML</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={css} alt="html" className="" />
          <p className="mt-2">CSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={expressjs} alt="html" className="" />
          <p className="mt-2">Express JS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={tailwind} alt="html" className="" />
          <p className="mt-2">TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={java} alt="html" className="" />
          <p className="mt-2">Java</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px] gap-2">
          <img src={cpp} alt="html" className="" />
          <p className="mt-2">C++</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
