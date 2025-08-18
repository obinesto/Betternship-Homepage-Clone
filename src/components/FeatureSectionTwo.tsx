import Carousel from "./Carousel";
import yellowStar from "../assets/yello star.png";
import redStar from "../assets/Red Star.png";

interface Feature {
  summary: string;
  content: string;
}

const features: Feature[] = [
  {
    summary: "Affordable rates",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis accusantium repellat molestiae quibusdam laborum aspernatur eligendi, ipsa eius sit dolorum tenetur eum dolor sapiente ab iste corrupti impedit! Commodi, incidunt?",
  },
  {
    summary: "Affordable rates",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta, placeat itaque neque optio, vel ipsam iusto fuga repellat quae deserunt, molestiae assumenda dolorem dolore corporis architecto minus a rem.",
  },
  {
    summary: "Affordable rates",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, consequatur quod. Tempora, asperiores voluptate et voluptates ab nam necessitatibus ut, eum ipsa ducimus reprehenderit commodi alias repudiandae quaerat iure at.",
  },
  {
    summary: "Affordable rates",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et molestias est vel aperiam, quisquam deserunt necessitatibus esse ut sunt deleniti quia, illo optio nobis aut quae in. Explicabo, est ipsum.",
  },
  {
    summary: "Affordable rates",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error, blanditiis eius atque cumque molestiae architecto omnis veniam velit quaerat odio iusto amet fugit fugiat incidunt, ab corrupti est alias.",
  },
  {
    summary: "Affordable rates",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione consequuntur asperiores iure sed, neque aliquid harum? Voluptas amet deserunt tempore. Accusamus voluptatum, nobis id nisi tempora cumque ab dolore.",
  },
  {
    summary: "Affordable rates",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius aperiam nulla omnis. Numquam quod error nam pariatur corporis? Molestias amet repudiandae sint voluptate minima libero veniam, necessitatibus esse dolores!",
  },
];
export default function FeatureSectionTwo() {
  return (
    <div className="bg-white w-full h-[80vh] min-h-screen">
      <div className="relative w-full h-[80%] flex flex-col gap-8 bg-foundation2">
        <section className="w-full pt-8 h-[30%]">
          {/* decorative icons */}
          <div className="flex w-full items-center justify-between px-6 md:px-8">
            <img src={redStar} alt="red decorative star" className="size-8" />
            <img
              src={yellowStar}
              alt="yellow decorative star"
              className="size-8"
            />
          </div>
          {/* text content */}
          <div className="flex flex-col w-[90%] md:w-[50%] mx-auto gap-4">
            <h2 className="text-center w-full font-semibold md:font-bold text-xl md:text-2xl">
              Fueled by Passion to Improve Recruitment
            </h2>
            <p className="text-center w-full">
              With a carefully curated selection process, we guarantee the
              recruitment of top-tier professionals who are dedicated to driving
              success and exceeding expectations. Our diverse talent pool
              fosters a collaborative environment where creativity flourishes.
            </p>
          </div>
        </section>

        <div className="mt-28 md:mt-0">
          <Carousel
            items={features}
            itemClassName="w-[60%] sm:w-[50%] md:w-[28%] flex-shrink-0 bg-white flex flex-col gap-2 md:gap-4 p-4 md:p-8 rounded-md shadow-md md:shadow-lg"
            renderItem={(item) => (
              <>
                <p className="w-full text-center font-bold">{item.summary}</p>
                <p className="w-full text-center text-xs sm:text-sm md:text-lg">
                  {item.content}
                </p>
              </>
            )}
          />
        </div>
      </div>
    </div>
  );
}