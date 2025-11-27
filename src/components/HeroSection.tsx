import { FaAngleDown } from "react-icons/fa";
import { whoAmI } from "../data-assets/data";
import { useEffect, useState } from "react";

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [showArrow, setShowArrow] = useState(true);

  const scrollToNextSection = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const disappear = () => {
    console.log("Arrow clicked, so hide");
    setShowArrow(false); // Hide the arrow
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % whoAmI.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="flex flex-col h-screen text-center relative bg-gradient-to-br from-accent-blue to-white">

  <div className="flex flex-col items-center justify-center flex-grow px-4">

    <p className="text-4xl sm:text-6xl lg:text-8xl font-bold text-primary-blue mb-4">
      Hey, I'm Ruth
    </p>

    <div className="flex flex-row gap-2 sm:gap-4 items-center">
      <h1 className="text-2xl sm:text-4xl lg:text-6xl text-text-dark">a</h1>

      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-secondary-blue font-semibold">
        {whoAmI[index]?.title}
      </h1>
    </div>

    <p className="text-base sm:text-lg md:text-xl text-text-light mt-8 max-w-xl sm:max-w-2xl">
      Crafting digital experiences that blend creativity with functionality
    </p>

  </div>

  {showArrow && (
    <div
      className="flex justify-center items-center pb-10 sm:pb-20 text-3xl sm:text-4xl cursor-pointer"
      onClick={() => {
        disappear();
        scrollToNextSection();
      }}
    >
      <FaAngleDown className="mb-5 sm:mb-10 text-primary-blue hover:text-secondary-blue transition-colors duration-300" />
    </div>
  )}

</section>

    </div>
  );
}

export default HeroSection;
