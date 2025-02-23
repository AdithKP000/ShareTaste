import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ChefCarousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const chefs = [
  { name: "Alain Ducasse", image: "/src/assets/ShareTasteImages/Photos/Chefs/Alain Ducasse.png" },
  { name: "Anne-Sophie Pic", image: "/src/assets/ShareTasteImages/Photos/Chefs/Anne-Sophie Pic.jpg" },
  { name: "Gordon Ramsay", image: "/src/assets/ShareTasteImages/Photos/Chefs/Gordon Ramsay.jpg" },
  { name: "Hélène Darroze", image: "/src/assets/ShareTasteImages/Photos/Chefs/Hélène Darroze.jpg" },
  { name: "Jamie Oliver", image: "/src/assets/ShareTasteImages/Photos/Chefs/Jamie Oliver.jpg" },
  { name: "Marco Pierre White", image: "/src/assets/ShareTasteImages/Photos/Chefs/Marco Pierre White.jpg" },
  { name: "Quique Dacosta", image: "/src/assets/ShareTasteImages/Photos/Chefs/Quique Dacosta.jpg" },
  { name: "Thomas Keller", image: "/src/assets/ShareTasteImages/Photos/Chefs/Thomas Keller.jpg" },
  { name: "Yannick Alléno", image: "/src/assets/ShareTasteImages/Photos/Chefs/Yannick Alléno.jpg" },
];

const ChefCarousel = ({ deviceType }) => {
  return (
    <div>
      <div className="chef-carousel-header">
        <div className="cch1">
          <h2>Top Chefs</h2>
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
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {chefs.map((chef, index) => (
          <div key={index} className="carousel-item">
            <img src={chef.image} alt={chef.name} draggable="false" />
            <p className="chef-name" draggable="false">{chef.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ChefCarousel;
