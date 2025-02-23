import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./DietCarousel.css";

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

const dietrecipe = [
  { name: "Keto Diet", image: "/src/assets/ShareTasteImages/Photos/Diet/Keto diet.png" },
  { name: "Low Fat Diet", image: "/src/assets/ShareTasteImages/Photos/Diet/Low Fat diet.png" },
  { name: "DASH Diet", image: "/src/assets/ShareTasteImages/Photos/Diet/DASH diet.png" },
  { name: "Atkins Diet", image: "/src/assets/ShareTasteImages/Photos/Diet/Atkins diet.png" },
  { name: "Gluten Free Diet", image: "/src/assets/ShareTasteImages/Photos/Diet/Gluten Free Diet.png" },
  { name: "Low Carb Diet", image: "/src/assets/ShareTasteImages/Photos/Diet/Low Fat diet.png" },

];

const DietCarousel = ({ deviceType }) => {
  return (
    <div>
      <div className="diet-carousel-header">
        <div className="pch1">
          <h2>Diet Recipes</h2>
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
        containerClass="diet-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="diet-carousel-item"
      >
        {dietrecipe.map((recipe, index) => (
          <div key={index} className="carousel-item">
            <img src={recipe.image} alt={recipe.name} draggable="false" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DietCarousel;
