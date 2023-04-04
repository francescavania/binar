import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiTwitch,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import LogoFooter from "../../assets/logo.png";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-address">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div>
        <p>Our services</p>
        <p>Why Us</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div className="footer-sosmed">
        <p>Connect with us</p>
        <div className="footer-icons">
          <div>
            <FiFacebook className="footer-icon" />
          </div>
          <div>
            <FiInstagram className="footer-icon" />
          </div>
          <div>
            <FiTwitter className="footer-icon" />
          </div>
          <div>
            <FiMail className="footer-icon" />
          </div>
          <div>
            <FiTwitch className="footer-icon" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright Binar 2022</p>
        <Link to="/">
          <img src={LogoFooter} alt="logo-footer" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
