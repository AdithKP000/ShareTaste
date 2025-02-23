import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./RegionalCarousel.css";

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

const regionalrecipe = [
  { name: "Asian", image: "/src/assets/ShareTasteImages/Photos/Regional/India.png" },
  { name: "European", image: "/src/assets/ShareTasteImages/Photos/Regional/European.png" },
  { name: "Middle Eastern", image: "/src/assets/ShareTasteImages/Photos/Regional/middle eastern.png" },
  { name: "African", image: "/src/assets/ShareTasteImages/Photos/Regional/African.png" },
  { name: "N & S America", image: "/src/assets/ShareTasteImages/Photos/Regional/North and South American.png" },
  { name: "Australian & Oceanian", image: "/src/assets/ShareTasteImages/Photos/Regional/Australian and Oceanic.png" },
];

const RegionalCarousel = ({ deviceType }) => {
  return (
    <div>
      <div className="regional-carousel-header">
        <div className="pch1">
          <h2>Regional Recipes</h2>
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
        containerClass="regional-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="regional-carousel-item"
      >
        {regionalrecipe.map((recipe, index) => (
          <div key={index} className="carousel-item">
            <img src={recipe.image} alt={recipe.name} draggable="false" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RegionalCarousel;
