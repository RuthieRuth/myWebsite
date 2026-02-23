import profilepix from "../assets/profilepix.jpeg";
import { IoMdDownload } from "react-icons/io";
import { GrFormView } from "react-icons/gr";

function About() {
  return (
    <div className="mx-auto px-4 max-w-6xl h-auto md:h-screen container py-4 pb-8 md:pb-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center my-4">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mx-auto items-center px-4 md:px-18">
        <div className="space-y-4">
          <p className="text-justify text-base md:text-lg text-text-dark leading-relaxed">
            Hello, I'm Ruth, a web developer based in Finland. My journey into
            tech began with a creative foundation in textiles, where I learned
            to combine detail, structure, and design thinking. Over time, that
            curiosity evolved into a passion for crafting engaging and impactful
            digital experiences.
          </p>
          <p className="text-justify text-base md:text-lg text-text-dark leading-relaxed">
            I bring a unique perspective to web development, blending
            functionality with aesthetics to create solutions that are not only
            practical but also visually appealing and intuitive. With a
            background that bridges creativity and problem-solving, I enjoy
            turning ideas into products that make people's lives easier and more
            enjoyable.
          </p>
          <p className="text-justify text-base md:text-lg text-text-dark leading-relaxed">
            Beyond code, I value collaboration, continuous learning, and
            building tools that truly resonate with users. My diverse background
            spans from technical development to customer service and team
            management, where I've developed strong leadership abilities,
            relationship management, and problem-solving skills that enhance my
            ability to create solutions that truly serve people's needs.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={profilepix}
            alt="personal picture"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-blue-800 hover-lift"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        {/* View Resume */}
        <a
          href="/CV_(Asafu-Adjaye-Ruth).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 hover:shadow-xl transform hover:-translate-y-1 font-medium"
        >
          <GrFormView className="text-2xl" />
          <span className="text-lg">View Resume</span>
          <span className="text-sm opacity-80">(PDF)</span>
        </a>
        {/* Download Resume */}
        <a
          href="/CV_(Asafu-Adjaye-Ruth).pdf"
          download
          className="flex items-center gap-3 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300 hover:shadow-xl transform hover:-translate-y-1 font-medium"
        >
          <IoMdDownload className="text-2xl" />
          <span className="text-lg">Download Resume</span>
          <span className="text-sm opacity-80">(PDF)</span>
        </a>
      </div>
    </div>
  );
}

export default About;
