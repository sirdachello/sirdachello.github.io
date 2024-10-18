import BenefitItem from "./BenefitItem";

import benefitImage1 from "../assets/Images/why us/WhyUsIcon (6).svg";
import benefitImage2 from "../assets/Images/why us/WhyUsIcon (3).svg";
import benefitImage3 from "../assets/Images/why us/WhyUsIcon (1).svg";
import benefitImage4 from "../assets/Images/why us/WhyUsIcon (2).svg";
import benefitImage5 from "../assets/Images/why us/WhyUsIcon (4).svg";
import benefitImage6 from "../assets/Images/why us/WhyUsIcon (5).svg";

const benefitItem1 = {
  image: benefitImage1,
  title: `Собаколюбство`,
  desc: `Лише собаколюб зрозуміє собаколюба на усі 100%.`,
  descMobile: `Лише собаколюб зрозуміє собаколюба на усі 100%.`,
};

const benefitItem2 = {
  image: benefitImage2,
  title: `Культура`,
  desc: `Песики та їх люди — частина міської культури, тому ми слідуємо правилам міста та внутрішній етиці собаколюбів.`,
  descMobile: `Ми слідуємо правилам міста та внутрішній етиці собаколюбів.`,
};

const benefitItem3 = {
  image: benefitImage3,
  title: `Персоналізація`,
  desc: `Комфортно має бути усім: песику, собаколюбу-замовнику та собаколюбу-виконавцю.`,
  descMobile: `Комфортно має бути усім: песику, замовнику та виконавцю.`,
};

const benefitItem4 = {
  image: benefitImage4,
  title: `Безпечна амуніція`,
  desc: `Все для впевненості, що песик не піде у самовигул.`,
  descMobile: `Все для впевненості, що песик не піде у самовигул.`,
};

const benefitItem5 = {
  image: benefitImage5,
  title: `Сучасне навчання`,
  desc: `Ніякого домінування. Ми про нові підхди у зоопсихології, які дозволяють розуміти та задовільняти потреби песиків, а не змінювати їх природу`,
  descMobile: `Ми про нові підходи у зоопсихології. Ніякого домінування.`,
};

const benefitItem6 = {
  image: benefitImage6,
  title: `Цінність часу`,
  desc: `Песики — гуру тайм-менеджменту, ми розділяємо цю звичку.`,
  descMobile: `Песики — гуру тайм-менеджменту. Ми розділяємо цю звичку.`,
};

export default function BenefitsSection() {

  return (
    <div className="w-[312px] sm:w-[500px] descMobile:w-max mx-auto mt-[90px]">
      <h2 className="mb-[28px] text-center text-lg h1 sm-400:text-xl sm:text-[25px] 2xl:mb-24 2xl:text-[40px]">
        Чому ми?
      </h2>
     <ul className="grid grid-cols-2 sm:grid-cols-3 sm:gap-5 descMobile:gap-[86px] descMobile:grid-cols-[repeat(3,_280px)]">
        <BenefitItem content={benefitItem1} />
        <BenefitItem content={benefitItem2} />
        <BenefitItem content={benefitItem3} />
        <BenefitItem content={benefitItem4} />
        <BenefitItem content={benefitItem5} />
        <BenefitItem content={benefitItem6} />
      </ul>
    </div>
  );
}






