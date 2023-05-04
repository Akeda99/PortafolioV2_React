import React, { useEffect } from "react";
import about from "../../public/about.png";
import cv from "../../public/CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="About"
      className=" py-[70px] px-[30px] max-[850px]:py-[50px]  max-[850px]:px-[15px] bg-[#03051c] text-white "
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#00dfd8]"
        data-aos="flip-down"
      >
        <span>A</span>bout me
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p
        className="text-base text-justify mt-4 font-medium   "
        data-aos="flip-down"
      >
        Hello! My name is <strong>Ray Cardenas</strong> I am very passionate and dedicated to my work.
        dedicated to my work. With the commitment that characterizes me I seek to
        to improve my knowledge every day. At this moment I am looking for
        to improve my skills through many projects.
      </p>
      <div className="flex gap-5 mt-6  max-[850px]:flex-col ">
        <div className="basis-[30%] text-center h-[370px]  max-[850px]:flex  max-[850px]:justify-center  max-[850px]:items-center  max-[850px]:w-full ">
          <img
            className="w-full h-full object-cover   max-[850px]:w-[50%]   max-[450px]:w-[90%]  "
            src={about}
          />
        </div>

        <div
          className="basis-[70%]"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className="text-3xl font-bold  max-[850px]:text-2xl text-[#00dfd8]  ">
            Front-End Developer!
          </h2>
          <p className="text-base italic font-normal mt-[15px]  text-justify">
          I am a Full Stack web developer focused on front-end development of web applications and platforms, in which, I am always willing to improve my skills, creating projects, measuring myself to challenges and with the motivation to keep learning.
          </p>

          <div className="my-[15px]">
            <ul className="flex flex-col gap-1 mt-5 max-[850px]:gap-0">
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-phone-volume mr-[4px] text-orange-500"></i>
                <strong className="font-semibold">Phone:</strong>
                <span className="ml-1 font-medium "> (+51) 961-642-488</span>
              </li>
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-calendar-days mr-[4px] text-orange-500"></i>
                <strong className="font-semibold">Age:</strong>
                <span className="ml-1 font-medium">23</span>
              </li>
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-location-dot mr-[4px] text-orange-500"></i>
                <strong className="font-semibold">Location:</strong>
                <span className="ml-1 font-medium">Pucallpa-Peru</span>
              </li>
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-graduation-cap mr-[4px] text-orange-500"></i>
                <strong className="font-semibold">Grade:</strong>
                <span className="ml-1 font-medium">
                Bachelor's degree in electronic engineering with specialization in web and mobile development.
                </span>
              </li>
              <li className="my-[8px] mx-0">
                <i className="fa-sharp fa-solid fa-envelope text-orange-500  mr-[5px]"></i>
                <strong className="font-semibold">Email:</strong>
                <span className="ml-1 font-medium">
                  raykevin1999@gmail.com
                </span>
              </li>
            </ul>
            <button className="bg-[#14b6bb] italic font-semibold cursor-pointer text-xl p-2 rounded transition-all duration-500 hover:translate-y-1 animate-bounce mt-[15px]">
              <a href={cv} download>
                <i className="fa-solid fa-download mr-2 bg-[#14b6bb]"></i>
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
