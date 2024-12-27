import { TypeAnimation } from "react-type-animation";
import pdf from "../assets/Parth_Chheda_Resume.pdf";
import MyFace from "../assets/MyFace.jpg";

function FrontPage({ textGradientColor }) {
  return (
    <div
      id="frontPage"
      className="flex flex-col sm:flex-row justify-center items-center gap-8 mx-auto bg-black text-white h-[70vh] py-3 px-4 my-40 sm:my-2"
    >
      <div className="flex justify-center">
        <img
          className="rounded-full w-auto h-72 sm:max-w-xs md:max-w-smlg:max-w-md object-cover"
          src={MyFace}
          alt="Parth Chheda"
        />
      </div>
      <div className="px-5 my-auto text-center sm:text-left zoom-in">
        <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-extrabold">
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
        <p className="text-white text-md sm:text-lg lg:text-xl my-6">
          My name is Parth Chheda and I am a student at the University of
          British Columbia.
        </p>

        <div className="flex flex-wrap justify-center sm:justify-start gap-4 my-3">
          <a
            href={pdf}
            className="px-6 py-3 rounded border border-gray-100 hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-sm sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
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
            className="cursor-pointer px-6 py-3 rounded border border-gray-100 hover:bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-sm sm:text-lg"
            aria-label="Contact Me"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
