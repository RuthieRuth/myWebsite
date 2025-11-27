import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="container mx-auto px-4 max-w-6xl h-auto md:h-screen pt-8 md:pt-2 pb-8 md:pb-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-primary-blue mb-8 md:mb-20">
        Contact
      </h2>

      <div className="text-center space-y-8">
        <p className="text-xl text-text-dark">
          Feel free to reach out to me through any of the following ways:
        </p>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-accent-blue max-w-md mx-auto">
          <p className="text-lg text-text-dark mb-4">Email me at:</p>
          <a
            href="mailto:ruthasafuadjaye@yahoo.com"
            className="text-secondary-blue hover:text-primary-blue transition-colors duration-300 text-xl font-medium"
          >
            ruthasafuadjaye@yahoo.com
          </a>
        </div>

        <p className="text-xl text-text-dark">
          Or connect with me on social media:
        </p>

        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/ruth-asafu-adjaye/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-xl shadow-lg hover-lift border border-accent-blue group"
          >
            <FaLinkedin className="text-4xl text-blue-600 group-hover:text-primary-blue transition-colors duration-300" />
          </a>
          <a
            href="https://github.com/RuthieRuth"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-xl shadow-lg hover-lift border border-accent-blue group"
          >
            <FaGithub className="text-4xl text-gray-800 group-hover:text-primary-blue transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
