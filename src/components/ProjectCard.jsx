import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

function ProjectCard({ el }) {
  return (
    <div className="">
      <div className="m-2 md:transform transition-all duration-300 overflow-hidden shadow-lg shadow-neutral-900 group rounded-md max-h-60 bg-cover relative">
        <img
          src={el.img}
          alt={el.title}
          className="object-cover w-full h-full"
        />
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
                className="text-center m-2 font-bold text-lg hover:-translate-y-5 transition-transform duration-300"
              >
                <FaGithub size={60} />
              </button>
            </div>
            {el?.live && (
              <div className="pt-8 text-center">
                <button
                  onClick={() => window.open(el.live, "_blank").focus()}
                  className="text-center m-2 font-bold text-lg hover:-translate-y-5 transition-transform duration-300"
                >
                  <GoLinkExternal size={60} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-white my-5">
        <div className="flex flex-row justify-between m-3">
          <h1 className="font-bold text-2xl">{el.title}</h1>
          <div className="flex justify-evenly">
            <button
              onClick={() => window.open(el.repo, "_blank").focus()}
              className="text-center mx-2 hover:scale-125 transition-transform duration-300"
            >
              <FaGithub size={30} />
            </button>
            {el?.live && (
              <button
                onClick={() => window.open(el.live, "_blank").focus()}
                className="text-center mx-2 hover:scale-125 transition-transform duration-300"
              >
                <GoLinkExternal size={30} />
              </button>
            )}
          </div>
        </div>
        <p className="mx-3">{el.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
