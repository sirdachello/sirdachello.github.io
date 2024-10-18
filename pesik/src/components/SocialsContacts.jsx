import imagePhone from "../assets/Images/Icons/телефон.svg";
import imageGeo from "../assets/Images/Icons/geo-alt-fill 1.svg";

export default function SocialsContacts() {
  return (
    <>
      <li className="list-none hover:scale-110 transition-all">
        <a className="text-white text-01" href="tel:+380980680917">
          <img className="mr-1 inline" src={imagePhone} alt="" />
          098 068 0917
        </a>
      </li>
      <li className="list-none hover:scale-110 transition-all">
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
    </>
  );
}
