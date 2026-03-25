import { useRef } from "react";

const Carousel = ({ children }) => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const width = scrollRef.current.clientWidth;

    scrollRef.current.scrollBy({
      left: direction === "next" ? width : -width,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel" ref={scrollRef}>
        {children}
      </div>

      <div className="controls">
        <button onClick={() => scroll("prev")}>←</button>
        <button onClick={() => scroll("next")}>→</button>
      </div>
    </div>
  );
};

export default Carousel;