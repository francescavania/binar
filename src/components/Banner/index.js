import { Link } from "react-router-dom";
import "./style.css";
import GreenButton from "../GreenButton";

const Banner = () => {
  return (
    <div className="banner">
      <h3>Sewa Mobil di (Lokasimu) Sekarang</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <Link to="/search">
        <GreenButton title="Mulai Sewa Mobil" />
      </Link>
    </div>
  );
};

export default Banner;
