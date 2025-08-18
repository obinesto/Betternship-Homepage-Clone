import { Link } from "react-router-dom";
import BlueStar from "../assets/Blue Star.png";
import PictureOne from "../assets/Picture 1.png";

interface Remark {
  remark: string;
  color: string;
}

export default function HeroSection() {
  const remarks: Remark[] = [
    { remark: "Access thousands of talents", color: "bg-circle" },
    { remark: "Access thousands of talents", color: "bg-foundation" },
    { remark: "Access thousands of talents", color: "bg-vector" },
  ];

  return (
    <div className="relative w-11/12 md:w-4/5 max-w-7xl mx-auto mt-16">
      {/* Decorative Icons */}
      <section className="relative h-24">
        <img
          src={BlueStar}
          alt="blue star"
          className="absolute top-0 left-0 w-12"
        />
        <div className="absolute top-0 right-30 w-6 h-6 bg-primary rounded-full"></div>
        <div className="absolute bottom-0 right-4 w-10 h-10 bg-star rounded-full"></div>
      </section>

      {/* Main Hero Content */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-28 mb-20">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-primary text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
            Unlock Potential Designed to Scale your Business
          </h1>
          <p className="text-sm sm:text-base text-tertiary mb-6">
            Hiring talents from our pool ensures access to a diverse range of
            skills and expertise, enriching our team with fresh perspectives and
            innovative ideas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/hire-an-intern"
              className="bg-foundation hover:bg-button text-white py-2 px-6 text-sm rounded-md"
            >
              Hire an Intern
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-[#a3b872] hover:bg-button text-[#a3b872] py-2 px-6 text-sm rounded-md"
            >
              How it works
            </Link>
          </div>
        </div>

        {/* Right Overlay with image in a circle */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-15 sm:mb-0">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-vector rounded-full overflow-hidden">
              <img
                src={PictureOne}
                alt="smiling lady"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Overlay list */}
          <div className="absolute top-3/4 md:top-4/5 left-0 sm:left-10 md:-left-20 lg:-left-0 bg-white p-4 rounded-lg shadow-md z-10 w-48 sm:w-56">
            <ul className="space-y-2">
              {remarks.map((obj, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded ${obj.color}`}></span>
                  <span className="text-xs sm:text-sm">{obj.remark}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* posterior design */}
      <section className="posterior relative h-30 w-full bg-foundation overflow-hidden"></section>
    </div>
  );
}
