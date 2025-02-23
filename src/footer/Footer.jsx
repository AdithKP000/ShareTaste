import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../assets/ShareTasteImages/Photos/48px-01.png';

const Footer = () => {
  return (
    <footer>
      <div className='footerlc'>
        <div className="footer-logo">
        </div>
        <div className="newsletter-banner">
          📩 Don’t Miss a Bite! <span className="subscribe">Subscribe</span> to Our Newsletter for Tasty Updates.
        </div>
      </div>
      <div className='footerlc'>
        <div className="footer-logo">
          <img
            src={logo}
            alt="ShareTaste Logo"
          />
        </div>
        <div className="footer-content">
          <div className="social-icons">
            <Link to="/"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="/"><i className="fa-brands fa-youtube"></i></Link>
            <Link to="/"><i className="fa-brands fa-linkedin"></i></Link>
            <Link to="/"><i className="fa-brands fa-facebook"></i></Link>
            <Link to="/"><i className="fa-brands fa-x-twitter"></i></Link>
          </div>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Need help?</Link>
            <Link to="/">Terms of use</Link>
            <Link to="/">Advertisements</Link>
          </div>

          <div className="footer-bottom">
            Made with ❤️ | Team ShareTaste © 2025
          </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
