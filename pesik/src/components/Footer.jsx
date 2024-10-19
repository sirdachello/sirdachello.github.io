import bgFooter from "../assets/Images/footer/FooterMobile.svg";
import bg from "../assets/Images/footer/BGCHECK2.svg";
import FooterSocialsContactsMobile from "./FooterSocialsContactsMobile";
import FooterSocialsMedia from "./FooterSocialsMedia";
import logo from "../assets/Images/footer/лого белое.svg";
import copyright from "../assets/Images/footer/copyright.svg";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const [bgImage, setBgImage] = useState(bgFooter);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBgImage(bg);
      } else {
        setBgImage(bgFooter);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative mt-8 flex h-[175px] w-[100vw] items-center justify-around bg-cover pr-4 sm-500:pr-7 sm:h-[250px] lg:pt-11 lg:bg-cover lg:bg-no-repeat lg:mt-52"
    >
      <img className="w-[25vw] max-w-[141px]" src={logo} alt="Brand Logo" />

      <div className="xl:flex xl:gap-9 2xl:pt-16">
        <Navigation />
        <FooterSocialsContactsMobile />
      </div>
      <FooterSocialsMedia />

      <img
        className="absolute bottom-[18px] left-[50%] translate-x-[-50%]"
        src={copyright}
        alt=""
      />
    </footer>
  );
}
