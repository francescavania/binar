import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

export default function Detail() {
  const params = useParams();
  const baseURL = "https://bootcamp-rent-cars.herokuapp.com/customer/car";
  const [carData, setCarData] = useState([]);

  console.log("params", params.id);

  useEffect(() => {
    axios
      .get(baseURL + "/" + params.id)
      .then((response) => {
        // handle success
        setCarData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, [params]);

  return (
    <>
      <Hero noContent={true} />
      <div style={{ textAlign: "center" }}>Ga Keburu styling kaaa</div>
      <div className="car-detail">
        <div className="package-info detail-box">
          <div>Tentang Paket</div>
          <div>Include</div>
          <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
        </div>
        <div className="car-info detail-box">
          <center>
            <img src={carData.image} alt="car" />
          </center>
          <div>{carData.name}</div>
          <div>Total : {carData.price}</div>
        </div>
      </div>
    </>
  );
}
