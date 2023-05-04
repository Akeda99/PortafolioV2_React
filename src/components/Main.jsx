import React from "react";
import fondo from "../../public/fon1.jpeg";
import About from "./About";
import Technologies from "./Technologies";
import { Typewriter } from "react-simple-typewriter";
import Projects from "./Projects";
import Contact from "./Contact";
import Top from "./Top";
import Resume from "./Resume";

const Main = () => {
  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <main className="ml-[300px] bg-white transition-all duration-300   max-[1050px]:ml-0 relative ">
      <section
        id="Home"
        style={{ backgroundImage: `url(${fondo})` }}
        className="h-screen w-full bg-no-repeat bg-cover bg-fixed	 flex  flex-col justify-center relative  p-[70px] 
        before:content-[''] before:w-full before:h-full before:bg-[#18171750]  before:absolute before:top-0 before:left-0 max-[670px]:p-[30px] "
      >
        <div className="z-10 ">
          <h1 className="text-white text-6xl font-semibold mb-1 leading-[70px] max-[670px]:text-3xl   max-[670px]:leading-[50px] ">
            Hi! I'm Ray Cardenas{" "}
            <span style={{ color: "#00dfd8", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Frontend Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>

          <p className="text-white text-3xl font-medium ">
          Passionate about technology and programming
          </p>
        </div>
      </section>
      <About />
      <Technologies />
      <Resume />
      <Projects />
      <Contact />
      <Top />
    </main>
  );
};

export default Main;
