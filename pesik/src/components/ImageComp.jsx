import bg from "../assets/Images/Last Section/Ellipse 9.svg";
import photo from "../assets/Images/Last Section/photo.svg";

export default function ImageComp() {

    return (
        <div className="flex justify-center items-center relative w-[100%] md:max-w-[600px] descMobile:max-w-[707px]">
          <img className="w-[100%] absolute top-0 left-0" src={bg} alt="" />
          <img className="w-[80%] relative z-10" src={photo} alt="" />
        </div>
      );
}