
import imageInst from  "../assets/Images/Icons/instagram 2.svg";
import imageFacebook from  '../assets/Images/Icons/facebook (4) 1.svg';

export default function SocialsMedia() {

    return (
        <>
            <li className="list-none hover:scale-110 transition-all"><a href="#instagram"><img src={imageInst} alt="" /></a></li>
            <li className="list-none hover:scale-110 transition-all"><a href="#instagram"><img src={imageFacebook} alt="" /></a></li>
        </>
    )
}