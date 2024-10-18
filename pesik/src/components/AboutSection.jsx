import blob from "../assets/Images/sectionTwo/Ellipse 8-1.svg";
import femaleImage from "../assets/Images/sectionTwo/SectionTwoFemale.svg";

export default function AboutSection() {
  return (
    <div className="mx-5 mt-16 items-center sm:flex sm:justify-around md:mt-24 2xl:mt-52">
      <div>
        <img
          src={femaleImage}
          alt="Smiling female with a dog sitting in the park."
        />
      </div>
      <div className="relative mx-auto max-w-[360px] sm:mx-0 sm:max-w-96 xl:mr-[8vw] 2xl:max-w-[500px]">
        <h2 className="mb-4 text-center text-lg h1 sm-400:text-xl md:text-[25px] 2xl:text-[40px]">
          Хто ми?
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
        <img
          src={blob}
          alt=""
          className="2xl: absolute bottom-[-30px] right-0 z-[-1] size-12 size-20"
        />
      </div>
    </div>
  );
}
