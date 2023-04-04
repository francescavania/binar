import ServicesImage from "../../assets/img_service.png";
import { FiCheck } from "react-icons/fi";
import "./style.css";

const OurServices = () => {
  const ourServicesItem = [
    {
      text: "Sewa Mobil Dengan Supir di Bali 12 Jam",
    },
    {
      text: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
    },
    {
      text: "Sewa Mobil Jangka Panjang Bulanan",
    },
    {
      text: "Gratis Antar - Jemput Mobil di Bandara",
    },
    {
      text: "Layanan Airport Transfer / Drop In Out",
    },
  ];
  return (
    <div id="ourservices">
      <img src={ServicesImage} alt="services" className="ourservices-image" />
      <div className="ourservices-desc">
        <h3 className="ourservices-title">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h3>
        <p className="ourservices-text">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <ul className="ourservices-list">
          {ourServicesItem.map((item, i) => {
            return (
              <li className="d-flex align-items-center">
                <div className="ourservices-list-icon">
                  <FiCheck size={16} className="ourservices-check-icon" />
                </div>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OurServices;
