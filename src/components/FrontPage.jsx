import { TypeAnimation } from "react-type-animation";
import pdf from "../assets/Parth_Chheda_Resume.pdf";

function FrontPage({ textGradientColor }) {
  return (
    <div
      id="frontPage"
      className="flex justify-center items-center sm:grid-cols-3 mx-auto bg-black text-white h-[70vh] py-3"
    >
      <div className="zoom-in px-5 my-auto text-center">
        <h1 className="text-white text-6xl lg:text-8xl font-extrabold">
          <span className={textGradientColor}>I'm a </span>
          <br />
          <TypeAnimation
            sequence={[
              "Developer",
              1000,
              "Lifelong Learner",
              1000,
              "Problem Solver",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg lg:text-xl my-6">
          My name is Parth Chheda and I am a student at the University of
          British Columbia.
        </p>
        <div className="my-3">
          <a
            href={pdf}
            className="px-6 py-3 w-full rounded border border-gray-100 hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 mr-4 text-sm sm:text-lg"
            target="_blank"
          >
            Download CV
          </a>
          <a
            onClick={() => {
              const element = document.getElementById("contact");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="cursor-pointer mr-4 px-6 py-3 w-full rounded border border-gray-100 hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-sm sm:text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
