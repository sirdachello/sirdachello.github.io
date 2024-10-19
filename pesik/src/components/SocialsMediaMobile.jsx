
import imageInst from  "../assets/Images/Icons/instagram 2.svg";
import imageFacebook from  '../assets/Images/Icons/facebook (4) 1.svg';

export default function SocialsMediaMobile() {

    return (
        <ul className="flex flex-col absolute top-28 right-5 gap-4 sm:right-12 md:hidden">
            <li className="list-none"><a target="blank" href="https://www.instagram.com/walk.with.doggie/"><img className="size-8" src={imageInst} alt="" /></a></li>
            <li className="list-none"><a target="blank" href="https://www.facebook.com/walk.with.doggie/"><img className="size-8" src={imageFacebook} alt="" /></a></li>
        </ul>
    )
}