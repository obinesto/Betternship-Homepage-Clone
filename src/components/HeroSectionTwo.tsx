import { useState, useEffect } from "react";
import craftImage from "../assets/craft image.png";
import heroImageOne from "../assets/Hero section two img1.jpg";
import heroImageTwo from "../assets/Hero section two img2.jpg";

export default function HeroSectionTwo() {
  const [carouselImageIndex, setCarouselImageIndex] = useState(0);
  const imageCarousel: string[] = [heroImageOne, heroImageTwo];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselImageIndex(
        (prevIndex) => (prevIndex + 1) % imageCarousel.length
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [imageCarousel.length]);

  return (
    <div className="bg-white w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-[95%] md:h-1/2 flex flex-col md:flex-row items-center bg-primary rounded-md">
        {/* Craft Images - Left */}
        <section className="w-full flex md:block md:w-1/8 h-[8%] md:h-full overflow-hidden">
          {[...Array(7)].map((_, index) => (
            <img
              key={index}
              src={craftImage}
              alt="a craft image design"
              className="h-full md:h-1/3 md:-rotate-90 opacity-20"
            />
          ))}
        </section>
        {/* Carousel Image Section */}
        <section className="w-full md:w-3/8 h-[30%] md:h-[110%] p-4 md:p-0">
          <img
            src={imageCarousel[carouselImageIndex]}
            alt="carousel image"
            className="rounded-lg h-full w-full"
          />
          {/* Text Content Section */}
        </section>
        <section className="w-full md:w-3/8 h-3/8 md:h-full flex flex-col gap-4 text-white px-4 py-8 mb-36 md:mb-0">
          <h1 className="w-full font-bold text-xl sm:text-2xl">The Problem</h1>
          <p className="text-xs sm:text-sm">
            Hiring talents from our pool ensures access to a diverse range of
            skills and expertise, enriching our team with fresh perspectives and
            innovative ideas. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos temporibus corporis accusantium consectetur, expedita
            obcaecati totam eaque rem porro quidem laboriosam nemo excepturi
            nostrum doloribus at. Dolores nemo alias dolore?
          </p>
          <div className="w-full md:w-3/4 flex items-center">
            <span className="size-[4px] rounded-[50%] bg-vector"></span>
            <span className="w-full md:w-3/4 h-[1px] bg-vector my-8"></span>
            <span className="size-[4px] rounded-[50%] bg-vector"></span>
          </div>
          <h1 className="w-full font-bold text-xl sm:text-2xl">Our Solution</h1>
          <p className="text-xs sm:text-sm">
            Hiring talents from our pool ensures access to a diverse range of
            skills and expertise, enriching our team with fresh perspectives and
            innovative ideas. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas, quibusdam! Illo autem mollitia blanditiis ad modi
            adipisci illum? Aspernatur aut temporibus ab ut doloribus libero
            blanditiis, aperiam iure facere quas!
          </p>
        </section>
        {/* Craft Images - Right */}
        <section className="w-full flex md:block md:w-1/8 h-[8%] md:h-full overflow-hidden">
          {[...Array(7)].map((_, index) => (
            <img
              key={index}
              src={craftImage}
              alt="a craft image design"
              className="h-full md:h-1/3 ml-0 md:ml-18 md:-rotate-90 opacity-20"
            />
          ))}
        </section>
      </div>
    </div>
  );
}
