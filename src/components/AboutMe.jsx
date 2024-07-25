function AboutMe({ textGradientColor }) {
  return (
    <div
      id="about"
      className="text-white max-width-[1200px] mx-auto my-12 sm:py-16 flex flex-col justify-center items-center"
    >
      <div className="mx-6 text-center">
        <h1
          className={`${textGradientColor} text-4xl font-extrabold sm:text-6xl mb-4`}
        >
          About Me
        </h1>
        <p className="max-w-[1200px] text-base sm:text-lg py-8 md:py-0">
          Hello! My name is Parth, and I am a sophmore Computer Science student
          at the University of British Columbia. I loved coding since the moment
          I picked it up in highschool. I enjoy solving complex problems since
          it enables me to learn and grow as a programmer. I am eager to apply
          my knowledge and creativity to contribute to dynamic projects and
          collaborate with like-minded professionals, and excited to take the
          next step in my journey to become a proficient developer and make a
          positive impact in the tech industry.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
