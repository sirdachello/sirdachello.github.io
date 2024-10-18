import OfferButton from "./OfferButton";
export default function OpeningSection() {
  return (
    <div className="ml-4 mt-14 sm-400:ml-[10vw] sm-400:mt-8 md:mt-10 lg:mt-28 xl:ml-52 xl:mt-36 2xl:ml-64 2xl:mt-48">
      <h1 className="mb-4 w-36 text-lg h1 sm-400:text-xl sm:mb-2 sm:w-64 md:w-80 md:text-[25px] lg:mb-6 2xl:w-auto 2xl:text-[40px]">
        Рятуємо собаколюбів від халеп
      </h1>
      <p className="hidden sm-400:w-60 sm:mb-2 sm:block sm:w-80 md:w-96 lg:mb-12 2xl:w-[550px] 2xl:text-[25px]">
        Ми — сервіс персоналізованого догляду за домашніми песиками у Вінниці.
      </p>
      <OfferButton />
    </div>
  );
}
