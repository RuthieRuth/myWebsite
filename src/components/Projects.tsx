import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

import independenceSquare from "../assets/independenceSquare.jpg";
import worldCountries from "../assets/worldCountries.jpg";
import IllusiaRy from "../assets/IllusiaRy.jpg";
import PingPoint from "../assets/PingPoint.jpg";

import { projectsDisplayed } from "../data-assets/data";

interface Project {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  sourceCode?: string;
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [open, setOpen] = useState(false);

  const singleProject = (project: Project) => {
    console.log("Single project clicked:", project);
    setSelectedProject(project);
    setOpen(true);
    // Prevent scrolling
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false); // Restore scrolling
    document.body.style.overflow = "unset";
  };

  // Also restore scrolling if component unmounts while modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 max-w-6xl h-auto md:h-screen pb-8 md:pb-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center my-8 md:my-20">
          Projects
        </h2>

        <div className={`${open ? "blur-sm" : ""}`}>
          <div className="grid grid-flow-col grid-rows-3 gap-4 min-h-96 w-full">
            {/* project 1 */}
            <div
              className="row-span-2 flex flex-col items-center justify-center relative overflow-hidden rounded-xl"
              onClick={() =>
                singleProject({
                  id: 1,
                  title: projectsDisplayed[0].title,
                  description: projectsDisplayed[0].description,
                  liveLink: projectsDisplayed[0].liveLink,
                })
              }
            >
              <img
                src={independenceSquare}
                alt="ghana"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="relative z-10 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                {projectsDisplayed[0].title}
              </span>
            </div>

            {/* project 2 */}
            <div
              className="col-span-3 flex items-center justify-center relative overflow-hidden rounded-xl"
              onClick={() =>
                singleProject({
                  id: 2,
                  title: projectsDisplayed[1].title,
                  description: projectsDisplayed[1].description,
                  liveLink: projectsDisplayed[1].liveLink,
                })
              }
            >
              <img
                src={IllusiaRy}
                alt="adomi"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="relative z-10 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                Illusia Ry
              </span>
            </div>

            {/* project 3 */}
            <div
              className="col-span-2 row-span-2 bg-blue-50 flex items-center justify-center relative rounded-xl"
              onClick={() =>
                singleProject({
                  id: 3,
                  title: projectsDisplayed[2].title,
                  description: projectsDisplayed[2].description,
                  liveLink: projectsDisplayed[2].liveLink,
                })
              }
            >
              <img
                src={worldCountries}
                alt="countries"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="relative z-10 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                Countries
              </span>
            </div>

            {/* project 4 */}
            <div
              className="col-span-2 row-span-3 bg-blue-50 flex items-center justify-center relative rounded-xl"
              onClick={() =>
                singleProject({
                  id: 4,
                  title: projectsDisplayed[3].title,
                  description: projectsDisplayed[3].description,
                  liveLink: projectsDisplayed[3].liveLink,
                })
              }
            >
               <img
                src={PingPoint}
                alt="pingpoint"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="relative z-10 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                PingPoint App
              </span>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-red bg-opacity-5 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4 relative">
            <IoMdClose
              className="absolute top-4 right-4 text-2xl cursor-pointer hover:text-gray-600"
              onClick={closeModal}
            />
            <h3 className="text-2xl font-bold mb-4">
              {selectedProject?.title}
            </h3>
            <div>
              <p className="mb-7">{selectedProject?.description}</p>
              <div className="flex gap-10">
                <div className="flex gap-10">
                  {selectedProject?.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank" // Opens in new tab
                      rel="noopener noreferrer" // Security best practice
                      className="text-blue-500 hover:underline"
                    >
                      Live link
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
