import OrderButton from "./OrderButton";
import DetailsButton from "./DetailsButton";
import { useState } from "react";
export default function ServiceCard({ image, content }) {
  const [isAlt, setIsAlt] = useState(false);

  const serviceItems = content.priceList.service?.map((service, index) => (
    <p key={index} className="flex justify-between">
      {service}{" "}
      <span className="mb-[2px] inline-block h-[24px] w-[67px] text-nowrap rounded-[4px] bg-[#7EEDE299] px-[6px] py-[2px] text-center">
        {content.priceList.price?.[index] || "N/A"}{" "}
        <span className="font-normal">грн</span>
      </span>
    </p>
  )) || <p>No services available</p>;

  const additionalServiceItems = content.priceList.additionalService?.map(
    (additionalService, index) => (
      <p key={index} className="flex justify-between">
        {additionalService}
        <span className="mb-[2px] inline-block h-[24px] w-[67px] text-nowrap rounded-[4px] bg-[#7EEDE299] px-[6px] py-[2px] text-center">
          {content.priceList.additionalServicePrice?.[index] || "N/A"}{" "}
          <span className="font-normal">грн</span>
        </span>
      </p>
    ),
  ) || <p>No additional services available</p>;

  const alternativeView = content.alt?.map(
    (altDesc, index) =>
      (
        <tr key={index} className="mb-3 flex gap-3">
          <td className="font-bold text-[#BC6726]">{index + 1}</td>
          <td className="text-[14px] font-medium leading-5 text-white">
            {altDesc}
          </td>
        </tr>
      ) || <p>No additional services available</p>,
  );
  return (
    <div className="relative h-[745px] w-[313px] rounded-[30px] bg-[#2AA89B] px-4 transition-all hover:cursor-pointer hover:shadow-lg 2xl:scale-110">
      {isAlt ? (
        <>
          <img
            className="absolute left-1/2 top-[-70px] size-[240px] translate-x-[-50%]"
            src={image}
            alt="A person petting a happy dog."
          />
          <h3 className="mb-2 pt-40 text-center text-[18px] font-bold leading-6 text-[#FFD38E]">
            ЯК МИ ПРАЦЮЄМО?
          </h3>
          <table className="">
            <tbody>{alternativeView}</tbody>
          </table>
          <hr className="my-[12px]" />
        </>
      ) : (
        <>
          <img
            className="absolute left-1/2 top-[-70px] size-[240px] translate-x-[-50%]"
            src={image}
            alt="A person petting a happy dog."
          />
          <h3 className="mb-2 pt-40 text-[18px] font-bold leading-6 text-[#FFD38E]">
            {content.title}
          </h3>
          <div className="text-[14px] font-medium leading-5 text-white">
            <p>{content.description[0]}</p> <br />
            <p>{content.description[1]}</p>
          </div>
          <hr className="my-[12px]" />
          <div className="text-[14px] font-bold text-white">
            {serviceItems} <br />
            {additionalServiceItems}
          </div>
          <hr className="my-[12px]" />
          <p className="mb-4 text-[12px] font-bold leading-4 text-white opacity-65">
            {content.note}
          </p>
        </>
      )}
      <div className="absolute bottom-4 left-[50%] flex translate-x-[-50%] flex-col gap-2">
        <DetailsButton setIsAlt={setIsAlt} />
        <OrderButton />
      </div>
    </div>
  );
}
