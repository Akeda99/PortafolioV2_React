import React from "react";

const Top = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <i
      onClick={handleClick}
      className="fa-sharp fa-solid fa-chevron-up fixed right-5 bottom-5 w-[40px] h-[40px] text-withe bg-[#14b6bb]
       text-3xl text-center leading-[40px] rounded-full animate-bounce cursor-pointer "
    ></i>
  );
};

export default Top;
