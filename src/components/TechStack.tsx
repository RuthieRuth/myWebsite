import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

function Skills() {
  return (
    <div className="container mx-auto px-4 max-w-6xl h-screen py-20">
      <h2 className="text-4xl font-bold text-center text-primary-blue mb-20">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover-lift border border-accent-blue">
          <FaHtml5 className="text-8xl text-orange-500 mb-4" />
          <p className="text-lg font-medium text-text-dark">HTML</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover-lift border border-accent-blue">
          <FaCss3Alt className="text-8xl text-blue-500 mb-4" />
          <p className="text-lg font-medium text-text-dark">CSS</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover-lift border border-accent-blue">
          <FaReact className="text-8xl text-cyan-500 mb-4" />
          <p className="text-lg font-medium text-text-dark">React</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover-lift border border-accent-blue">
          <SiJavascript className="text-8xl text-yellow-500 mb-4" />
          <p className="text-lg font-medium text-text-dark">JavaScript</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover-lift border border-accent-blue">
          <SiTypescript className="text-8xl text-blue-600 mb-4" />
          <p className="text-lg font-medium text-text-dark">TypeScript</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
