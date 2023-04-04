import CarImage from "../../assets/img_car.png";
import { Link } from "react-router-dom";
import "./style.css";
import GreenButton from "../GreenButton";

const Hero = ({ searchButton = true, noContent = false }) => {
  return (
    <div className="hero">
      {!noContent && (
        <div className="hero-content">
          <div className="hero-description">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {searchButton && (
              <Link to="/search">
                <GreenButton title="Mulai Sewa Mobil" />
              </Link>
            )}
          </div>
          <img src={CarImage} alt="hero-car" />
        </div>
      )}
    </div>
  );
};

export default Hero;
