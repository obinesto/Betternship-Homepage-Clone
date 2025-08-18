import { useEffect, useState, useRef } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  scrollInterval?: number;
  scrollAmount?: number;
  itemClassName?: string;
}

export default function Carousel<T>({
  items,
  renderItem,
  scrollInterval = 3000,
  scrollAmount = 300,
  itemClassName = "",
}: CarouselProps<T>) {
  const [displayItems, setDisplayItems] = useState([...items]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, scrollInterval);

    return () => {
      clearInterval(timer);
    };
  }, [scrollInterval]);

  useEffect(() => {
    if (currentIndex > 0 && currentIndex >= displayItems.length - 5) {
      setDisplayItems((prevItems) => [...prevItems, ...items]);
    }

    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, [currentIndex, displayItems.length, items, scrollAmount]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      <section
        ref={scrollContainerRef}
        className="relative flex w-full overflow-x-scroll gap-4 scroll-smooth scrollBarHide"
      >
        {displayItems.map((item, index) => (
          <div key={index} className={itemClassName}>
            {renderItem(item, index)}
          </div>
        ))}
      </section>
      
      <button
        type="button"
        title="arrow left"
        className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 rounded-full bg-foundation text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollLeft}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        title="arrow right"
        className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 rounded-full bg-foundation text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={scrollRight}
      >
        <ChevronRight />
      </button>
    </div>
  );
}