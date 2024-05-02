import React, { useState, useEffect } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
  logo33,
  logo34,
  logo35,
  logo36,
  logo37,
} from "../../../public/images/Sponsors";

const images1 = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
]; // Array of image paths

const images2 = [
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo30,
  logo31,
  logo32,
  logo33,
  logo34,
  logo35,
  logo36,
  logo37,
];

const Partner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoverIndex1, setHoverIndex1] = useState(null); // Track hover for the first carousel
  const [hoverIndex2, setHoverIndex2] = useState(null); // Track hover for the second carousel

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setScrollPosition(
          (prevPosition) => (prevPosition + 1) % images1.length,
        );
      }
    }, 600);

    return () => clearInterval(interval);
  }, [isPaused, images1.length]);

  const handleMouseEnter1 = (index) => {
    setIsPaused(true);
    setHoverIndex1(index);
  };

  const handleMouseLeave1 = () => {
    setIsPaused(false);
    setHoverIndex1(null);
  };

  const handleMouseEnter2 = (index) => {
    setIsPaused(true);
    setHoverIndex2(index);
  };

  const handleMouseLeave2 = () => {
    setIsPaused(false);
    setHoverIndex2(null);
  };

  const renderCarouselItem = (
    image,
    index,
    imagesArray,
    hoverIndex,
    handleMouseEnter,
    handleMouseLeave,
  ) => {
    const adjustedIndex = (scrollPosition + index) % imagesArray.length;
    const isHovered = index === hoverIndex;

    return (
      <div
        key={index}
        className="carousel-item flex flex-col gap-10  "
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        {!isHovered && (
          <div className="m-4 block h-[200px] w-[200px]">
            <img
              src={imagesArray[adjustedIndex]}
              alt={`Slide ${adjustedIndex + 1}`}
            />
          </div>
        )}
        {isHovered && (
          <div className="m-4 flex h-48 w-48 items-center justify-center rounded-3xl bg-burkina-blue ">
            <button className="border-zinc-100 inline-flex h-12  w-44 items-center justify-center rounded-[100px] border-2 bg-sand">
              Partnership
              <RiArrowRightSLine size={24} />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="carousel mx-10 max-w-full gap-7 rounded-box">
        {images1.map((image, index) =>
          renderCarouselItem(
            image,
            index,
            images1,
            hoverIndex1,
            handleMouseEnter1,
            handleMouseLeave1,
          ),
        )}
      </div>
      <div className="carousel max-w-full gap-7 rounded-box">
        {images2.map((image, index) =>
          renderCarouselItem(
            image,
            index,
            images2,
            hoverIndex2,
            handleMouseEnter2,
            handleMouseLeave2,
          ),
        )}
      </div>
    </>
  );
};

export default Partner;
