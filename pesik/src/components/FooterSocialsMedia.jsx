
import imageInst from  "../assets/Images/Icons/instagram 2.svg";
import imageFacebook from  '../assets/Images/Icons/facebook (4) 1.svg';

export default function FooterSocialsMedia() {

    return (
        <div className="flex gap-2 flex-col  lg:flex-row lg:scale-150">
            <li className="list-none hover:scale-110 transition-all"><a target="blank" href="https://www.instagram.com/walk.with.doggie/"><img src={imageInst} alt="" /></a></li>
            <li className="list-none hover:scale-110 transition-all"><a target="blank" href="https://www.facebook.com/walk.with.doggie/"><img src={imageFacebook} alt="" /></a></li>
        </div>

    )
}