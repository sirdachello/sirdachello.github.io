import Navigation from "./Navigation";
import Contacts from "./Contacts";
import SocialsMediaMobile from "./SocialsMediaMobile.jsx";
import SocialsContactsMobile from "./SocialsContactsMobile.jsx";

import logo from "../assets/Images/logo_brown.svg";

export default function Header() {
  return (
    <header className="mx-5 my-5 flex justify-between md:mx-8 xl:mx-[80px] 2xl:mx-[108px]">
      <img
        className="sm-400:size-auto sm-400:mt-0 sm-400:ml-0 ml-[-14px] mt-[-20px] size-[25vw]"
        src={logo}
        alt="Brand Logo"
      />
      <Navigation />
      <Contacts />
      <SocialsContactsMobile />
      <SocialsMediaMobile />
    </header>
  );
}
