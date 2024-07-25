function Contact({ textGradientColor }) {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h1
          className={`${textGradientColor} text-4xl font-extrabold sm:text-6xl mb-6`}
        >
          Contact Me
        </h1>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-neutral-800 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Contact;
