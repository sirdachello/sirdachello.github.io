import BGmobile from "../assets/Images/Reviews/ReviewsBGMobile.svg";
import BG from "../assets/Images/Reviews/ReviewsBG.svg";
import review1 from "../assets/Images/Reviews/Review1.png";
import review2 from "../assets/Images/Reviews/Review2.png";
import review1Mobile from "../assets/Images/Reviews/Review2Mobile.png";
import review2Mobile from "../assets/Images/Reviews/Review1Mobile.png";
import nextButton from "../assets/Images/Reviews/SlideButtonNext.svg";
import prevButton from "../assets/Images/Reviews/SlideButtonPrev.svg";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const mobileReviews = [review1Mobile, review2Mobile];
const reviews = [review1, review2];

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(
      (curr) => (curr - 1 + mobileReviews.length) % mobileReviews.length,
    );
  };
  const nextSlide = () => {
    setIndex((curr) => (curr + 1) % mobileReviews.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
        console.log("Swiped left");
        nextSlide();
      },
    onSwipedRight: () => {
        console.log("Swiped right");
        prevSlide();
      },
    preventDefaultTouchmoveEvent: true, // Prevent scrolling while swiping
    trackMouse: true, // Optional: allows dragging with mouse too
  });

  return (
    <>
      <div
        {...handlers}
        style={{ backgroundImage: `url(${BGmobile})` }}
        className="group relative mx-auto mt-4 flex h-[685px] w-[320px] items-center justify-center bg-contain bg-center bg-no-repeat lg:hidden"
      >
        <button
          onClick={() => prevSlide()}
          className="absolute left-28 bottom-16 z-10 transition-all hover:scale-110"
        >
          <img src={prevButton} alt="" />
        </button>
        <img className="z-0 scale-90" src={mobileReviews[index]} alt="" />

        <button
          onClick={() => nextSlide()}
          className="absolute right-28 bottom-16 z-10 transition-all hover:scale-110"
        >
          <img src={nextButton} alt="" />
        </button>
      </div>
      <div
        {...handlers}
        style={{ backgroundImage: `url(${BG})` }}
        className="relative mx-auto mt-4 hidden h-[550px] w-[1000px] items-center justify-center bg-contain bg-center bg-no-repeat lg:flex"
      >
        <button
          onClick={() => prevSlide()}
          className="absolute left-28 top-2/4 z-10 transition-all hover:scale-110"
        >
          <img src={prevButton} alt="" />
        </button>

        <img className="scale-75 mt-16" src={reviews[index]} alt="" />
        <button
          onClick={() => nextSlide()}
          className="absolute right-28 top-2/4 z-10 transition-all hover:scale-110"
        >
          <img src={nextButton} alt="" />
        </button>
      </div>
    </>
  );
}
