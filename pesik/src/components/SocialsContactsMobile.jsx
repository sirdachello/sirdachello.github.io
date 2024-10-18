import imagePhone from "../assets/Images/Icons/телефон.svg";
import imageGeo from "../assets/Images/Icons/geo-alt-fill 1.svg";

export default function SocialsContactsMobile() {
  return (
    <ul className="flex flex-col shrink-0 mr-4 md:hidden sm:flex-row sm:gap-4 sm:items-center sm:mt-[-50px]">
      <li className="list-none">
        <a className="text-white text-01" href="tel:+380980680917">
          <img className="mr-1 inline" src={imagePhone} alt="" />
          098 068 0917
        </a>
      </li>
      <li className="list-none">
        <a
          className="text-white text-01"
          href="https://maps.app.goo.gl/rTjZNiWKTKnUzkD59"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="mr-1 inline" src={imageGeo} alt="" />
          Вінниця
        </a>
      </li>
    </ul>
  );
}
