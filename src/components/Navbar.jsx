import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar({ textGradientColor }) {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((curr) => !curr);
  };

  return (
    <div className="bg-black h-[8vh] text-gray-100 w-screen flex justify-between items-center fixed top-0 z-10 border-b-2 border-white">
      <h1 className={`text-2xl font-bold md:ml-12 ml-4 ${textGradientColor}`}>
        Parth Chheda
      </h1>
      <ul className="hidden md:flex mr-10">
        <li className="p-5">
          <button
            onClick={() => {
              const element = document.getElementById("about");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </button>
        </li>
        <li className="p-5">
          <button
            onClick={() => {
              const element = document.getElementById("projects");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </button>
        </li>
        <li className="p-5">
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact Me
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? `fixed h-full left-0 top-0 w-[60%] bg-neutral-900 ease-in-out duration-500`
            : `fixed left-[-100%] ease-in-out duration-500 h-full top-0 bg-neutral-900`
        }
      >
        <h1 className={`text-3xl font-bold m-4 ${textGradientColor}`}>
          Parth Chheda
        </h1>
        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-2">
            <a href="#projects">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
