import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./BannerCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const slides = [
  { name: "Carousel Banner 1", image: "/src/assets/ShareTasteImages/Photos/Banners/1.png" },
  { name: "Carousel Banner 2", image: "/src/assets/ShareTasteImages/Photos/Banners/2.png" },
  { name: "Carousel Banner 3", image: "/src/assets/ShareTasteImages/Photos/Banners/3.png" },
  { name: "Carousel Banner 4", image: "/src/assets/ShareTasteImages/Photos/Banners/4.png" },
  { name: "Carousel Banner 5", image: "/src/assets/ShareTasteImages/Photos/Banners/5.png" },
  { name: "Carousel Banner 6", image: "/src/assets/ShareTasteImages/Photos/Banners/6.png" },
  { name: "Carousel Banner 7", image: "/src/assets/ShareTasteImages/Photos/Banners/7.png" }
];

const BannerCarousel = ({ deviceType }) => {
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        document.querySelector(".react-multi-carousel-track")?.scrollBy({
          left: 1120, // Adjust according to banner width
          behavior: "smooth"
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="banner-carousel-wrapper">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        containerClass="banner-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="banner-carousel-dots"
        itemClass="banner-carousel-slide"
      >
        {slides.map((slide, index) => (
          <div key={index} className="banner-carousel-item">
            <img src={slide.image} alt={slide.name} draggable="false" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
