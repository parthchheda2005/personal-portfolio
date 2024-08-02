import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact({ textGradientColor }) {
  return (
    <div
      className="on-load max-w-[1200px] mx-auto bg-black sm:py-20 p-5"
      id="contact"
    >
      <div className="text-center">
        <h1
          className={`${textGradientColor} text-4xl font-extrabold sm:text-6xl mb-6`}
        >
          Contact Me
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <button
          className="py-3 px-4"
          onClick={() =>
            window
              .open(
                "https://www.linkedin.com/in/parth-chheda-2a8805309/",
                "_blank"
              )
              .focus()
          }
        >
          <FaLinkedin color="white" size={80} />
        </button>
        <button
          className=" py-3 px-4"
          onClick={() =>
            window.open("https://github.com/parthchheda2005", "_blank").focus()
          }
        >
          <FaGithubSquare color="white" size={80} />
        </button>
        <button
          className="py-3 px-4"
          onClick={() =>
            window.open("mailto:parth.h.chheda@gmail.com", "_blank").focus()
          }
        >
          <MdEmail color="white" size={80} />
        </button>
      </div>
    </div>
  );
}

export default Contact;
