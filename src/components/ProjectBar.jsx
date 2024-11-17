import { FaGithub } from "react-icons/fa";
import { RxGlobe } from "react-icons/rx";

function ProjectBar({ el }) {
  return (
    <div className="m-2 transform transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-neutral-900 group rounded-md flex justify-center items-center max-h-60 bg-cover relative">
      <img src={el.img} alt={el.title} className="object-cover w-full h-full" />
      <div className="opacity-0 group-hover:opacity-90 bg-neutral-600 absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500">
        <h1 className="lg:text-xl font-extrabold text-xl mt-2 lg:mt-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-14 transition-all duration-500">
          {el.title}
        </h1>
        <h1 className="lg:text-l font-extralight text-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-14 transition-all duration-500">
          {el.stack}
        </h1>
        <div className="flex flex-row justify-center items-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-14 transition-all duration-500">
          <div className="pt-8 text-center">
            <button
              onClick={() => window.open(el.repo, "_blank").focus()}
              className="text-center m-2 font-bold text-lg hover:scale-125 transition-transform duration-300"
            >
              <FaGithub size={60} />
            </button>
          </div>
          {el?.live && (
            <div className="pt-8 text-center">
              <button
                onClick={() => window.open(el.live, "_blank").focus()}
                className="text-center m-2 font-bold text-lg hover:scale-125 transition-transform duration-300"
              >
                <RxGlobe size={60} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectBar;
