export default function BenefitItem({content}) {

    return (
        // <div className="w-36 descMobile:w-[280px]">
        <div className="">
            <img className="h-[57px] w-[50px] mb-2 sm:scale-110 descMobile:scale-125" src={content.image} alt="" />
            <h3 className="text-[#BC6726] font-bold text-[14px] descMobile:text-[18px] descMobile:mb-2" >{content.title}</h3>
            <p className="leading-5 text-[14px] descMobile:text-[16px]">
                <span className="descMobile:hidden">{content.descMobile}</span>
                <span className="hidden descMobile:inline">{content.desc}</span>
            </p>
        </div>
    )
}