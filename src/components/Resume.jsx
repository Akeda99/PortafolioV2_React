import React from "react";

const Resume = () => {
  return (
    <section
      id="Resume"
      className="py-[50px] px-[15px] sm:px-[30px] bg-[#03051c]  text-white"
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#00dfd8]"
        data-aos="flip-down"
      >
        Education and Experience
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>

      <div className="flex flex-col gap-5 mt-9 sm:justify-between  sm:flex-row   ">
        <div className="basis-[50%]">
          <div className="cols">
            <h2 className="text-[#00dfd8] font-semibold text-xl my-4 mx-0">
            Sumary{" "}
            </h2>

            <div
              className="pt-0 pr-[20px] pb-0  pl-[20px]  my-5 mx-0 border-l-2 border-[#00dfd8] relative

              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h3 className="text-base font-semibold uppercase text-[#00dfd8]">
              Ray Cardenas
              </h3>
              <p className="font-semibold italic text-sm my-[10px] mx-0 text-justify">
              Graduated from the ELECTRONIC ENGINEERING career with
                socialization skills, planning strategies for the achievement of
                for the achievement of a good objective and leadership. I like
                learning new things, being able to achieve the proposed objectives,
                I have interest in developing in very advanced areas such as
                programming, web design, database, I am motivated to work in a team, progress and good
                teamwork, progress and good presence.
              </p>
              <ul className="pb-2">
                <li className="my-2 ml-3 text-base font-medium">
                  Perú-Pucallpa-Ucayali
                </li>
                <li className="my-2 ml-3 text-base font-medium">
                  (+51) 961-642-488
                </li>
                <li className="my-2 ml-3 text-base font-medium">
                  raykevin1999@gmail.com
                </li>
              </ul>
            </div>

            <h3 className="text-base font-bold uppercase text-[#00dfd8]">
              Education
            </h3>

            <div data-aos="fade-up" data-aos-duration="3000">
              <div
                className="pt-0 pr-[20px] pb-0  pl-[20px] mt-5 mx-0   border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              >
                <h3 className="text-[#00dfd8] uppercase font-semibold">
                FULL-STACK WEB PROGRAMMING AND COMPUTER SCIENCES BOOTCAMP
                </h3>
                <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
                  2022 - 2023
                </span>
                <p className="mb-4 italic font-medium">Academlo, Queretaro, Mexico</p>
                <p className="font-normal text-base pb-4 text-justify">
                I gained solid knowledge in the fundamentals of web development, including HTML, CSS and JavaScript. I also developed skills in creating web applications using the ReactJS library and backend implementation using NodeJS. Through hands-on projects, I was able to apply this knowledge in creating functional and scalable web applications.
                </p>
              </div>

              <div
                className="pt-0 pr-[20px] pb-0  pl-[20px]   border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              >
                <h3 className="text-[#00dfd8] uppercase font-semibold">
                ELECTRONIC ENGINEERING
                </h3>
                <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
                  2016 - 2021
                </span>
                <p className="mb-4 italic font-medium">
                Santa Maria Catholic University, Arequipa, PE
                </p>
                <p className="font-normal text-base pb-4 text-justify">
                I learned all about programming, automation and acquired solid knowledge of algorithms and database modeling.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[50%]">
          <h2
            className="text-[#00dfd8]  text-xl my-4 mx-0   font-bold
          "
          >
            Professional Experience
          </h2>
          <div
            className="pt-0 pr-[20px] pb-0  pl-[20px]  my-5 mx-0 border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3 className="text-base font-semibold uppercase text-[#00dfd8]">
              Frontend Dev React Native
            </h3>
            <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
              2023 - 2023
            </span>
            <p className="text-base italic font-normal">
              Buenos Aires, Argentina
            </p>
            <ul className="pb-1">
              <li className="my-[10px] mx-0 text-base text-justify font-normal ">
              Implement engaging and functional UI designs using React Native components.
              </li>
              <li className="my-[10px] mx-0 text-base text-justify font-normal">
              Collaborate with the design team to ensure design solutions are technically feasible and optimized for the mobile platform.
              </li>

              <li className="my-[10px] mx-0 text-base text-justify font-normal">
              Perform testing and debugging of the mobile application to ensure that it meets the requirements and quality standards
              </li>
              <li className="my-[10px] mx-0 text-base text-justify font-normal">
              The finished project was achieved in an estimated time of 4 weeks, with all the requirements
                weeks, with all the proposed requirements
              </li>
              {/* <li className="text-right mx-0 text-lg text-[#00dfd8] font-semibold ">
                <a
                  href="https://tu-destino-app-client.vercel.app/"
                  target={"_blank"}
                >
                  Dar click aquí para visualizar el proyecto
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
