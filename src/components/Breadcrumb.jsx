import { Link } from "react-router-dom";
import "./Breadcrumb.css";
import SearchBar from './SearchBar.jsx';
import searchlogo from "../assets/ShareTasteImages/Photos/SearchIcon.png";
import logo from "../assets/ShareTasteImages/Photos/48px-01.png";

const Breadcrumb = () => {
  return (
    <nav className="HeaderBC">
      <div className="hlogo">
        <a href="/">
          <img src={logo} alt="Logo" className="h-10" />
        </a>
      </div>

      <div className="search-container">
        <SearchBar />
        <img src={searchlogo} alt="Search Logo" className="hsearchlogo" />
      </div>

      <div className="nav-center">
        <div className="hnav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>

      <a href="/signup">
        <button className="hsignup">
          Sign Up
        </button>
      </a>
    </nav>
  );
};

export default Breadcrumb;