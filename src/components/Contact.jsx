import React, { useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import style from "./style/project.module.css";

const Contact = () => {

  const [state, handleSubmit] = useForm("myyvreqo");
  if (state.succeeded) {
      return(
        <section className="flex justify-center  bg-[#03051c] ">
        <p className=" text-lg text-justify font-medium text-center m-8">Thanks for contacting me I will answer soon!</p>

        </section>

      ) 
 
  }
  return (
    <section
      className="py-[50px] px-[15px] pb-[150px]  bg-[#03051c]  text-white "
      id="Contact"
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#00dfd8]"
        data-aos="flip-down"
      >
        Contact
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p className="text-lg text-justify mt-5 font-medium  ">
      You can contact me by sending me an email
      </p>

      <div className="mt-[80px] flex flex-col gap-8  md:flex-row  ">
        <div
          className={`${style.box} basis-[40%] 
            p-[30px] rounded-[5px] `}
        >
          <div className="flex gap-4 items-center my-[30px] mx-0  ">
            <div>
              <a href="mailto:espinozadiazjorgeluis@gmail.com">
                <i
                  className="fa-sharp fa-solid fa-envelope w-[40px] h-[40px] rounded-full  text-center leading-[36px] text-xl
              border-solid border-2 border-sky-500 transition-all duration-200  hover:bg-[#ddd9d9] text-black bg-[#00dfd8]  cursor-pointer"
                ></i>
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold ">Email:</h2>
              <p className="text-white text-base">
                <a href="mailto:espinozadiazjorgeluis@gmail.com">
                raykevin1999@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center ">
            <div>
              <i
                className="fa-sharp fa-solid fa-location-dot w-[40px] h-[40px] rounded-full  bg-[#00dfd8] hover:bg-[#ddd9d9] text-center leading-[36px] text-xl
              border-solid border-2 border-sky-500 text-black cursor-pointer"
              ></i>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Location:</h2>
              <span className=" text-base text-white">
              Jr.Iparia Mz 43 Lote 4A 25004
              </span>
            </div>
          </div>

          <div className="flex  gap-4 items-center my-[30px] mx-0  ">
            <div>
              <a href="tel:+51961642488">
                <i
                  className="fa-sharp fa-solid fa-phone w-[40px] h-[40px] rounded-full   text-center leading-[36px] text-xl 
              border-solid border-2 border-sky-500 text-black bg-[#00dfd8] hover:bg-[#ddd9d9] cursor-pointer"
                ></i>
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Phone:</h2>
              <a href="tel:+51961642488">
                <span className=" text-base text-white">
                  {" "}
                  (+51)  961642488
                </span>
              </a>
            </div>
          </div>

          <div className="border-solid border-4 border-sky-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d986.846424765412!2d-74.56860202674666!3d-8.36366549965816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m0!4m3!3m2!1d-8.3639447!2d-74.5684634!5e0!3m2!1ses-419!2spe!4v1683229499400!5m2!1ses-419!2spe"
              width="100%"
              height="250"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={`${style.box} basis-[60%]   p-[30px] rounded-[5px] `}>
          <form
          onSubmit={handleSubmit}
            className="grid grid-cols-1   "
          >
            <div className="w-full mt-6 ">
              <input
                className="w-full h-10 py-[10px] px-[20px] text-base rounded-[4px]  font-medium  text-black
                focus:outline-none focus:border-2 focus:border-cyan-500 focus:ring-green-700 focus:ring-1 border border-[#5b5a5a]"
                type="name"
                placeholder="Name"
                name="name"
                id="name"

              />
            </div>
            <div className="w-full  mt-6">
              <input
                className="w-full h-10 py-[10px] px-[20px] text-base rounded-[4px]  font-medium text-black
                focus:outline-none focus:border-2 focus:border-cyan-500 focus:ring-green-700 focus:ring-1"
                type="email"
                placeholder="Email"
                name="email"
                id="email"

              />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
            </div>
            <div className="w-full  mt-6">
              <textarea
                className="w-full  text-black py-[10px] px-[20px] text-base rounded-[4px]  font-medium outline-none 
                focus:border-2  focus:border-[#00dfd8] focus:ring-[#00dfd8] focus:ring-1 resize-none"
                rows="12"
                placeholder="Message"
                id="message"
                name="message"
              />
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                   />
            </div>
            <div className="w-full  mt-6">
              <button
                className="w-full text-white font-bold  h-10  text-lg rounded-[4px] bg-[#14b6bb]  cursor-pointer"
                type="submit" disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
