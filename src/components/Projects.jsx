import courseTracker from "../assets/course-tracker.png";
import fplHelper from "../assets/fpl-helper.png";
import heartDiseasePredictor from "../assets/heart-disease-predictor.png";
import movieWebapp from "../assets/movie-webapp.png";
import ProjectCard from "./ProjectCard";

function Projects({ textGradientColor }) {
  const images = [
    {
      img: fplHelper,
      repo: "https://github.com/parthchheda2005/fpl-helper",
      live: "https://fpl-helper.onrender.com",
      title: "FPL Helper",
      stack: "React, MongoDB, Node.js, Express.js, TailwindCSS",
      desc: "Fantasy Premier League companion website to compare player statisitcs and provide recommendations on future transfers. Data collected via web scraping the official FPL page and FBREF, and updated biweekly.",
    },
    {
      img: movieWebapp,
      repo: "https://github.com/parthchheda2005/movie-webapp-frontend",
      live: "https://movie-database-puce.vercel.app/",
      title: "MyMovieList",
      stack: "React, MongoDB, Node.js, Express.js, CSS",
      desc: "Connects to the TMDb API to show movies playing in cinemas today. Developed CRUD operations for rating movies, persisted on a NoSQL database.",
    },
    {
      img: heartDiseasePredictor,
      repo: "https://github.com/parthchheda2005/dsci-100-project/blob/main/heart_disease_report.ipynb",
      title: "Heart Disease Predictor",
      stack: "R, tidymodels/tidyverse",
      desc: "Collaborated in a team of 4 to develop a K-Nearest Neighbor prediction model to predict heart disease, considering variables such as cholesterol levels, age and resting heart rate, achieving a ~70% accuracy.",
    },
    {
      img: courseTracker,
      repo: "https://github.com/parthchheda2005/Course-Tracker",
      stack: "Java, Java Swing, JUnit",
      title: "Course Tracker",
      desc: "Developed a unit-tested application to plan future courses, using OOP principles and uses JSON to persist data.",
    },
  ];

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
          <div key={el.title}>
            <ProjectCard el={el} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
