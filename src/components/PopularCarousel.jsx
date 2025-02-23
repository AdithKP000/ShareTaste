import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PopularCarousel.css";

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

const popularrecipe = [
  { name: "Pizza", image: "/src/assets/ShareTasteImages/Photos/popular/pizza.png" },
  { name: "Oats", image: "/src/assets/ShareTasteImages/Photos/popular/oats.png" },
  { name: "Steak", image: "/src/assets/ShareTasteImages/Photos/popular/steak.png" },
  { name: "Biriyani", image: "/src/assets/ShareTasteImages/Photos/popular/biriyani.png" },
  { name: "Fish Curry", image: "/src/assets/ShareTasteImages/Photos/popular/fishcurry.png" },
  { name: "Sushi", image: "/src/assets/ShareTasteImages/Photos/popular/Sushi.png" },
];

const PopularCarousel = ({ deviceType }) => {
  return (
    <div>
      <div className="popular-carousel-header">
        <div className="pch1">
          <h2>Popular Recipes</h2>
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
        containerClass="popular-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="popular-carousel-item"
      >
        {popularrecipe.map((recipe, index) => (
          <div key={index} className="carousel-item">
            <img src={recipe.image} alt={recipe.name} draggable="false" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularCarousel;
