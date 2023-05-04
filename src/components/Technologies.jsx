import React, { useEffect } from "react";
import git from "../../public/git.png";
import post from "../../public/post.png";
import router from "../../public/router.png";
import bootstrap from "../../public/bootstrap.png";

const Technologies = () => {
  return (
    <section className=" py-[50px] px-[30px] max-[850px]:py-[50px]  max-[850px]:px-[15px] bg-[#03051c] text-blue-50 ">
      <h1
        className="text-3xl font-semibold mb-3 text-[#00dfd8]"
        data-aos="flip-down"
      >
        My Technologies
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>

      <p
        className="text-lg text-justify mt-4 font-medium  "
        data-aos="flip-down"
      >
        Some of my skills as a web developer focused on meeting your web application needs
      </p>
      <div className="grid  grid-cols-3 py-[50px] px-[30px] gap-6  sm:grid-cols-5  md:grid-cols-6 lg:grid-cols-7">
        <div className="w-full h-[90px] ">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src="https://enriquezapata.com/wp-content/uploads/2021/12/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac250cda95.4452823815233628530527.png"
            alt=""
          />
          <p className="text-center font-semibold  text-[#00dfd8]">React</p>
        </div>
        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src={router}
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">R Router</p>
        </div>

        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src="https://cdn.worldvectorlogo.com/logos/redux.svg"
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">Redux</p>
        </div>

        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src="https://zaidakary.github.io/Portafolio/imagenes/javascript.jpg"
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8] ">
            JavaScript
          </p>
        </div>

        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg"
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">HTML</p>
        </div>

        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src="https://icons-for-free.com/iconfiles/svg/0/css3+internet+style+technology+web+website+icon-1320192729058533072.svg"
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">CSS</p>
        </div>

        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src="https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png"
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">Git</p>
        </div>

        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src={git}
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">GitHub</p>
        </div>
        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">Tailwind</p>
        </div>

        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src={bootstrap}
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">Bootstrap</p>
        </div>
        <div className="w-full h-[86px]">
          <img
            className="w-full h-full object-contain animate-wiggle"
            src={post}
            alt=""
          />
          <p className="text-center font-semibold text-[#00dfd8]">PostGress</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
