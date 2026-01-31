import { useEffect, useState } from "react";
import Me from "../assets/Me.png";
import resume from "../assets/Curriculum Vitae.pdf";
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "And I'm a Web Developer.";
  const typingSpeed = 100;
  const pauseDuration = 1000;
  let currentIndex = 0;
  let isDeleting = false;

  // === Typing Effect ===
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);

    const typeWriterLoop = () => {
      if (!isDeleting) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === fullText.length) {
          isDeleting = true;
          setTimeout(typeWriterLoop, pauseDuration);
          return;
        }
      } else {
        setTypedText(fullText.slice(0, currentIndex - 1));
        currentIndex--;
        if (currentIndex === 0) {
          isDeleting = false;
          setTimeout(typeWriterLoop, pauseDuration);
          return;
        }
      }
      setTimeout(typeWriterLoop, typingSpeed);
    };

    typeWriterLoop();
  }, []);

  return (
    <section className="h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 relative">

      <div className="max-w-6xl mx-auto w-full">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Image + Intro */}
            <div className="text-center lg:text-left order-1">
              <div className="mb-6 sm:mb-8">
                <div className="relative inline-block mb-4 sm:mb-6">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-96 md:h-96 mx-auto lg:mx-0 relative">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl sm:blur-3xl"></div>

                    {/* Image Container */}
                    <div className="relative z-10 w-full h-full mt-10 lg:mt-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
                      <img
                        src={Me}
                        alt="Character"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-80 md:h-80 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="space-y-2 sm:space-y-3">
                  <p className="text-gray-300 text-base sm:text-lg">
                    Hello! I'm{" "}
                    <span className="text-purple-400 font-semibold">
                      Lom Leuy
                    </span>
                  </p>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight px-2 sm:px-0">
                    My knowledge is still limited{" "}
                    <br className="hidden sm:inline" />
                    but <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">with your guidance</span>
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto lg:mx-0 px-4 sm:px-0">
                    We can learn and move forward together.
                  </p>
                </div> */}
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-center lg:text-left order-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0 ">Hello, It's Me, </h1>
             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0 ">Lom Leuy</h1>
             
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
                {typedText}
                <span className="border-r-2 border-white animate-pulse ml-1"></span>
              </h2>

              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-lg text-sm sm:text-base px-4 sm:px-0 mx-auto lg:mx-0">
                A passionate self-taught developer with 1+ years of experience
                building modern, responsive, and user-friendly websites and
                applications. I focus on crafting clean, efficient code and
                creating digital solutions that balance great user experiences
                with business objectives.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <a
                  href="#projects"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  View My Work
                </a>
              <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="backdrop-blur-md bg-white/5 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base flex items-center justify-center"
>
  View CV
</a>

              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
