import { useState, useEffect } from "react";    
import upArrow from "../assets/upArrow.png";


export default function Footer() {
    const [isTop, setIsTop] = useState<boolean>(false);
    //console.log(isTop);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        window.scrollY > 300 ? setIsTop(true) : setIsTop(false);
      });
    }, []);
  
    function goTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  
    return (
      <footer className="sticky">
        {isTop && (
          <img src={upArrow} className="w-8 z-20 fixed bottom-10 right-10 xl:right-17 xl:bottom-17 drop-shadow-lg hover:-translate-y-1" onClick={goTop} alt="toTop" />
        )}
  
        <a href="https://www.yanqin.de" target="_blank">
          <p className="text-base text-center bg-gray-400 w-fit h-fit text-white  mx-auto my-4 rounded-full py-0 px-4 drop-shadow-md hover:bg-gray-500 transition duration-700 ease-in-out">2024 © QIN's code</p>
        </a>
      </footer>
    );
  }
  