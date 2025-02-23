import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./LiveCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const livethumbnail = [
  { name: "Live1", image: "/src/assets/ShareTasteImages/Photos/Live Cooking/1.png" },
  { name: "Live2", image: "/src/assets/ShareTasteImages/Photos/Live Cooking/2.png" },
  { name: "Live3", image: "/src/assets/ShareTasteImages/Photos/Live Cooking/3.png" },
  { name: "Live4", image: "/src/assets/ShareTasteImages/Photos/Live Cooking/4.png" },
  { name: "Live5", image: "/src/assets/ShareTasteImages/Photos/Live Cooking/5.png" },
  { name: "Live6", image: "/src/assets/ShareTasteImages/Photos/Live Cooking/6.png" },
];

const liveCarousel = ({ deviceType }) => {
  return (
    <div>
      <div className="live-carousel-header">
        <div className="pch1">
          <h2>Live Recipes</h2>
          <button className="livecount">
            Live: 551
          </button>
        </div>

        <div className="cch2">
          <a href="/" target="_blank" rel="noopener noreferrer" className="viewallcarousel">
            <h2 className="viewalltext">View All <img src="/src/assets/ShareTasteImages/Photos/viewallicon.png" alt="ViewAllIcon" className="viewall-icon" /></h2>
          </a>
        </div>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        containerClass="live-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="live-carousel-item"
      >
        {livethumbnail.map((live, index) => (
          <div key={index} className="carousel-item">
            <img src={live.image} alt={live.name} draggable="false" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default liveCarousel;
