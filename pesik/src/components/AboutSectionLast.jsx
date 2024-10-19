import OfferButton from "./OfferButton";
import nextButton from "../assets/Images/Reviews/SlideButtonNext.svg";

import ImageComp from "./ImageComp";

export default function AboutSection() {
  return (
    <div className="mx-5 items-center sm:flex sm:flex-row-reverse sm:justify-around lg:mt-12 2xl:mx-28 2xl:mt-52">
      <ImageComp />
      <div className="relative mx-auto mt-10 max-w-[360px] sm:mx-0 sm:max-w-[300px] xl:mr-[8vw] 2xl:max-w-[500px]">
        <h2 className="mb-4 text-left text-lg h1 sm-400:text-xl md:text-[25px] 2xl:text-[40px] 2xl:leading-10">
          Шукаєш місце, де доглянуть песика?
        </h2>
        <p className="text-left tracking-wide text-03 2xl:text-[25px]">
          {" "}
          <span className="font-bold text-[#2AA89B]">«ГуляйПесик»</span> —
          сервіс персоналізованого догляду за домашніми песиками у Вінниці.{" "}
          <br />
        </p>
        <p className="text-left tracking-wide text-03 2xl:text-[25px]">
          {" "}
          Ми про персоналізований догляд та дог-френдлі культуру у місті. А коли
          раптом халепа — рятуємо послугами вигулювачів, песиконяні та домашньої
          перетримки.
        </p>

        <div className="flex justify-between">
        <OfferButton />
        <a href="#top" className="hover:cursor-pointer -rotate-90 size-12 sm:hidden">
        <img
          src={nextButton}
          alt=""
          className=""
        />
        </a>
        </div>
      </div>
    </div>
  );
}
