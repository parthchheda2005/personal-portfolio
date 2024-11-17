import courseTracker from "../assets/course-tracker.png";
import fplHelper from "../assets/fpl-helper.png";
import heartDiseasePredictor from "../assets/heart-disease-predictor.png";
import movieWebapp from "../assets/movie-webapp.png";
import ProjectBar from "./ProjectBar";

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
      live: "https://movie-database-puce.vercel.app/",
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

  const getColumnStart = (index, totalItems) => {
    const itemsInLastRow = totalItems % 3;
    if (itemsInLastRow === 0) return "";

    const isInLastRow = index >= totalItems - itemsInLastRow;
    if (!isInLastRow) return "";

    // For a row with 1 item, start at column 2
    if (itemsInLastRow === 1) return "sm:col-start-2";
    // For a row with 2 items, start the first item at column 1 and second at column 3
    if (itemsInLastRow === 2) {
      const isFirstInLastRow = index === totalItems - 2;
      return isFirstInLastRow ? "sm:col-start-1" : "sm:col-start-3";
    }
    return "";
  };

  return (
    <div id="projects" className="text-white max-width-[1200px] mx-auto">
      <div className="mx-6 my-3 text-center">
        <h1
          className={`${textGradientColor} text-4xl font-extrabold sm:text-6xl mb-6`}
        >
          Projects
        </h1>
      </div>

      <div className="on-load grid sm:grid-cols-3 gap-4 mx-7">
        {images.map((el, index) => (
          <div
            key={el.title}
            className={`${getColumnStart(index, images.length)}`}
          >
            <ProjectBar el={el} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
