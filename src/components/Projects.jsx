import React, { useEffect } from "react";
import crud from "../../public/projects/crud3.jpg";
import ecommerce from "../../public/projects/EcommerceReact.jpg";
import pokemon from "../../public/projects/poke2.png";
import quotes from "../../public/projects/frases.jpg";
import rick from "../../public/projects/rick.jpg";
import weather from "../../public/projects/weather.jpg";
import pawsitive from "../../public/projects/Home_paw.png";
import style from "./style/project.module.css";
import pedidos from "../../public/projects/pedidos.png"
import html from "../../public/projects/Ecommercehtml.jpg"
const Projects = () => {
  return (
    <section
      id="Project"
      className=" py-[50px] px-[15px] bg-[#03051c] text-blue-50"
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#00dfd8]"
        data-aos="flip-down"
      >
        Proyectos
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p
        className="text-lg text-justify mt-4 font-medium  "
        data-aos="flip-down"
      >
These are some of the projects I have developed in different areas of web development with a lot of dedication.
      </p>
      {/* //?item 1 */}
      <div className="mt-[70px]  px-[20px] grid grid-cols-3 gap-9  max-[600px]:grid-cols-1 max-[1300px]:grid-cols-2">
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg `}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-c  over`}
            src={pawsitive}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative ">
              <h4 className="text-white text-center text-3xl font-bold">
                Pawsitive
              </h4>
              <p className=" mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Pawsitive is a Game App that helps you to train in caring a virtual pet, you initially can pick a cat or a dog, give it a name,
                you have to bathe it, feed it, play with it, put him to sleep, and not to make it sick, made with React Native, Redux and React Animations.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/No-Country/s7-27-m-desafioreactnative"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a
                href="https://drive.google.com/file/d/1-8Ri7czIpCqKcg0uTrg-k99IDN7Bl7Ck/view?usp=sharing"
                target="_blank" 
              >
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
      {/* //?item 2 */}
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg `}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={ecommerce}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative ">
              <h4 className="text-white text-center text-3xl font-bold">
                Ecommerce
              </h4>
              <p className=" mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              The e-commerce site, the web site offers a dynamic user interface for a
                dynamic user interface for a shopping experience.
                Technologies and libraries used in the React front end,
                Axios, React-Hook-Form, React-Hook-Form, Redux toolkit,
                React-Router-Dom, Javascript, HTML and css.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Akeda99/E-commerce-React"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://e-commerce-react-raycardenas.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>

        {/* //?item 3 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={pedidos}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                El Buen Sabor App
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              It is a mobile application that allows you to order your favorite food or drinks from a restaurant to be delivered to your home, it is dynamically made to work on any phone, and also very interactive for the user, made with React Native.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/No-Country/c9-41-m-reactnative"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              {/* <a href="https://jled-pokemons.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a> */}
            </div>
          </div>
        </figure>
        {/* //?item 4 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={pokemon}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                PokeApi
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              A simpler version of the pokedex with a friendly and intuitive design, shows the
                intuitive design, shows the characteristics of each pokemon.
                Technologies used React, HTML and CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Akeda99/pokedex"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://pokedex-ray-cardenas.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 5 */}
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={rick}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Rick and Morty App
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              Realized from the consumption of an API, with its characteristics,
                has a bar for personalized search by id of each planet.
                planet. Technologies used React, Axios, HTML and CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Akeda99/Api_rick_morty"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://rick-and-morty-api-ray-cardenas.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>

        {/* //?item 4 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80 relative overflow-hidden rounded-lg`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={crud}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Crud-app
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              Project where I use React tools with Axios while consuming an API with Get, Post, Delete methods.
                consuming an API with Get, Post, Delete methods. Technologies
                used React, HTML and CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Akeda99/Entregable4_gen20"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://crud-app-ray.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 5 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={weather}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Weather-app
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              Built to display the weather data at your location
                occupies an API that allows you to interact with this data.
                Technologies used React, HTML and CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Akeda99/Weather_App"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://weather-app-ray-cardenas.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 6 */}
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={quotes}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Quotes
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              Project made from a JSON file, where he shares with us some famous
                shares famous phrases of some visionaries of the past, by changing the
                the phrase is assigned a new random color to the style shown on the screen.
                shown on screen.
                <span> Made with React, HTML y CSS</span>
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Akeda99/Entregable1"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://random-quotes-ray-cardenas.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 9 */}
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
          data-aos="flip-left"
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={html}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Ecommerce Design
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
              Project about an ecommerce and one of its main functions of buying and selling, fully responsive and dynamic with light/dark button.
                <span> Made with HTML, CSS and Javascript</span>
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a
                href="https://github.com/Akeda99/E-Commerce-Academlo"
                target="_blank"
              >
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://ecommerce-ray-cardenas.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Projects;
