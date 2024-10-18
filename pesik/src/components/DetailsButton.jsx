export default function DetailsButton({setIsAlt}) {
    return (
      <button onClick={() => {setIsAlt(curr => !curr)}} className="h-[54px] w-[220px] rounded-[43px] bg-[#7EEDE299] text-[14px] font-bold text-white transition-all hover:scale-[1.009] hover:shadow-lg">
        ЯК МИ ПРАЦЮЄМО?
      </button>
    );
  }
  