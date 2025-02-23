import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CategoryCarousel.css";

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

const categoryrecipe = [
  { name: "frozen desserts", image: "/src/assets/ShareTasteImages/Photos/Category/frozen desserts.png" },
  { name: "Baked & Pastries", image: "/src/assets/ShareTasteImages/Photos/Category/Baked & Pastries.png" },
  { name: "Fast & Street Food", image: "/src/assets/ShareTasteImages/Photos/Category/Fast & Street Food.png" },
  { name: "Healthy and Light Food", image: "/src/assets/ShareTasteImages/Photos/Category/Healthy and Light Food.png" },
  { name: "Traditional & Regional Cuisines.png", image: "/src/assets/ShareTasteImages/Photos/Category/Traditional & Regional Cuisines.png" },
  { name: "Homely", image: "/src/assets/ShareTasteImages/Photos/Category/Homely.png" },
  { name: "Snacks", image: "/src/assets/ShareTasteImages/Photos/Category/Snacks.png" },
  { name: "Beverages & Drinks", image: "/src/assets/ShareTasteImages/Photos/Category/Beverages & Drinks.png" }
];

const CategoryCarousel = ({ deviceType }) => {
  return (
    <div>
      <div className="category-carousel-header">
        <div className="pch1">
          <h2>Category Recipes</h2>
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
        containerClass="category-carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="category-carousel-item"
      >
        {categoryrecipe.map((recipe, index) => (
          <div key={index} className="carousel-item">
            <img src={recipe.image} alt={recipe.name} draggable="false" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
