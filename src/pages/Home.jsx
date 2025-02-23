import React from "react";
import Breadcrumb from "../components/Breadcrumb.jsx";
import ChefCarousel from "../components/ChefCarousel.jsx";
import LiveCarousel from "../components/LiveCarousel.jsx";
import BannerCarousel from "../components/BannerCarousel.jsx";
import PopularCarousel from "../components/PopularCarousel.jsx";
import DietCarousel from "../components/DietCarousel.jsx";
import CategoryCarousel from "../components/CategoryCarousel.jsx";
import RegionalCarousel from "../components/RegionalCarousel.jsx";
import AddRecipeIcon from "../assets/ShareTasteImages/Photos/AddRecipeIcon.png";
import "./FloatingButton.css";
import LoginSignUp from "../components/LoginSignUp.jsx";

const Home = () => {
  return (
    <>
      <Breadcrumb />
      <BannerCarousel />
      <LiveCarousel deviceType="desktop" />
      <ChefCarousel deviceType="desktop" />
      <PopularCarousel deviceType="desktop" />
      <DietCarousel deviceType="desktop" />
      <CategoryCarousel deviceType="desktop" />
      <RegionalCarousel deviceType="desktop" />
      <LoginSignUp/>
      <button 
        className="add-recipe-button" 
        onClick={() => navigate("/NewRecipe")}
      >
        <img src={AddRecipeIcon} alt="Add Recipe" />
      </button>
    </>
  );
};

export default Home;