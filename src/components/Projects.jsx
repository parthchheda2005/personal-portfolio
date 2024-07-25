import courseTracker from "../assets/course-tracker.png";
import fplHelper from "../assets/fpl-helper.png";
import heartDiseasePredictor from "../assets/heart-disease-predictor.png";
import movieWebapp from "../assets/movie-webapp.png";
import { FaGithubSquare } from "react-icons/fa";

function Projects({ textGradientColor }) {
  const images = [
    {
      img: fplHelper,
      repo: "https://github.com/parthchheda2005/fpl-helper",
      live: "https://fpl-helper.onrender.com",
      title: "FPL Helper",
      stack: "React, MongoDB, Node.js, Express.js, TailwindCSS",
    },
    {
      img: movieWebapp,
      repo: "https://github.com/parthchheda2005/movie-webapp-frontend",
      live: "https://github.com/parthchheda2005/movie-webapp-frontend",
      title: "Movie Webapp",
      stack: "React, MongoDB, Node.js, Express.js, CSS",
    },
    {
      img: heartDiseasePredictor,
      repo: "https://github.com/parthchheda2005/dsci-100-project/blob/main/heart_disease_report.ipynb",
      title: "Heart Disease Predictor",
      stack: "R, tidymodels/tidyverse",
    },
    {
      img: courseTracker,
      repo: "https://github.com/parthchheda2005/Course-Tracker",
      stack: "Java, Java Swing, JUnit",
      title: "Course Tracker",
    },
  ];

  return (
    <div id="projects" className="text-white max-width-[1200px] mx-auto">
      <div className="mx-6 text-center">
        <h1
          className={`${textGradientColor} text-4xl font-extrabold sm:text-6xl mb-6`}
        >
          Projects
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mx-7 items-center">
        {images.map((el) => (
          <div className="transform transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-neutral-900 group container rounded-md flex justify-center items-center max-h-[400px] bg-cover relative">
            <img src={el.img} alt="movie webapp" />
            <div className="opacity-0 group-hover:opacity-90 bg-neutral-600 absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-extrabold">{el.title}</h1>
              <h1 className="text-xl font-extralight">{el.stack}</h1>
              <div className="flex flex-row justify-center items-center">
                <div className="pt-8 text-center">
                  <button
                    onClick={() => window.open(el.repo, "_blank").focus()}
                    className="text-center m-2 font-bold text-lg hover:scale-125 transition duration-300"
                  >
                    <FaGithubSquare size={80} />
                  </button>
                </div>
                {el?.live && (
                  <div className="pt-8 text-center">
                    <button
                      onClick={() => window.open(el.live, "_blank").focus()}
                      className="text-center m-2 py-3 px-4 rounded-lg font-bold text-black bg-neutral-50 text-lg hover:scale-125 transition duration-300"
                    >
                      Live
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
