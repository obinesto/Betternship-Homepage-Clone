import { useState, useEffect } from "react";
import craftImage from "../assets/craft image.png";
import heroImageOne from "../assets/Hero section two img1.jpg";
import heroImageTwo from "../assets/Hero section two img2.jpg";

export default function FeatureSectionOne() {
  const [carouselImageIndex, setCarouselImageIndex] = useState(0);
  const imageCarousel: string[] = [heroImageOne, heroImageTwo];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselImageIndex(
        (prevIndex) => (prevIndex + 1) % imageCarousel.length
      );
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, [imageCarousel.length]);

  return (
    <div className="bg-white w-full min-h-screen flex justify-center items-center py-8">
      <div className="relative w-full min-h-[400px] md:h-[60vh] flex flex-col md:flex-row items-center bg-primary rounded-md">
        {/* Craft Images - Left */}
        <section className="w-full flex md:block md:w-[12.5%] h-24 md:h-full overflow-hidden">
          {[...Array(7)].map((_, index) => (
            <img
              key={index}
              src={craftImage}
              alt="a craft image design"
              className="h-full md:h-1/3 md:-rotate-90 opacity-20 object-contain"
            />
          ))}
        </section>
        {/* Carousel Image Section */}
        <section className="w-full md:w-[37.5%] h-[300px] md:h-[120%] p-4 md:p-6 flex items-center">
          <img
            src={imageCarousel[carouselImageIndex]}
            alt="carousel image"
            className="rounded-lg h-full w-full object-cover"
          />
        </section>
        {/* Text Content Section */}
        <section className="w-full md:w-[37.5%] h-auto md:h-full flex flex-col gap-2 text-white px-4 py-4 md:py-8">
          <h1 className="w-full font-bold text-2xl md:text-3xl">The Problem</h1>
          <p className="text-sm md:text-base">
            Hiring talents from our pool ensures access to a diverse range of
            skills and expertise, enriching our team with fresh perspectives and
            innovative ideas. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quos temporibus corporis accusantium consectetur, expedita
            obcaecati totam eaque rem porro quidem laboriosam nemo excepturi
            nostrum doloribus at. Dolores nemo alias dolore?
          </p>
          <div className="w-full md:w-3/4 flex items-center my-2 md:my-4">
            <span className="size-[4px] rounded-[50%] bg-vector"></span>
            <span className="w-full h-[1px] bg-vector"></span>
            <span className="size-[4px] rounded-[50%] bg-vector"></span>
          </div>
          <h1 className="w-full font-bold text-2xl md:text-3xl">Our Solution</h1>
          <p className="text-sm md:text-base">
            Hiring talents from our pool ensures access to a diverse range of
            skills and expertise, enriching our team with fresh perspectives and
            innovative ideas. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas, quibusdam! Illo autem mollitia blanditiis ad modi
            adipisci illum? Aspernatur aut temporibus ab ut doloribus libero
            blanditiis, aperiam iure facere quas!
          </p>
        </section>
        {/* Craft Images - Right */}
        <section className="w-full flex md:flex-col md:items-end md:w-[12.5%] h-24 md:h-full overflow-hidden">
          {[...Array(7)].map((_, index) => (
            <img
              key={index}
              src={craftImage}
              alt="a craft image design"
              className="h-full md:h-1/3 md:-rotate-90 opacity-20 object-contain"
            />
          ))}
        </section>
      </div>
    </div>
  );
}