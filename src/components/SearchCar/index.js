import "./style.css";
import axios from "axios";
import GreenButton from "../GreenButton";
import { Form } from "react-bootstrap";
import { useRef } from "react";

const SearchCar = () => {
  const carNameRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();

  const baseURL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car";

  const handleSearch = (e) => {
    e.preventDefault();

    const minPrice =
      priceRef.current.value === "2"
        ? 400000
        : priceRef.current.value === "3" && 600000;

    const maxPrice =
      priceRef.current.value === "1"
        ? 400000
        : priceRef.current.value === "2" && 600000;

    const searchData = {
      name: carNameRef.current.value,
      category: categoryRef.current.value,
      minPrice: minPrice || "",
      maxPrice: maxPrice || "",
      status: statusRef.current.value,
    };
    console.log("searchData", searchData);

    axios
      .get(baseURL, {
        params: searchData,
      })
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  return (
    <div>
      <Form className="search" onSubmit={handleSearch}>
        <div>
          <Form.Label>Nama Mobil</Form.Label>
          <Form.Control placeholder="Masukan Nama Mobil" ref={carNameRef} />
        </div>
        <div>
          <Form.Label>Kategori</Form.Label>
          <Form.Select ref={categoryRef}>
            <option value={""} hidden>
              -Masukan Kapasitas Mobil-
            </option>
            <option value={"small"}>2-4 orang</option>
            <option value={"Medium"}>4-6 orang</option>
            <option value={"large"}>6-8 orang</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label>Harga</Form.Label>
          <Form.Select ref={priceRef}>
            <option value={""} hidden>
              -Masukan Harga Sewa per Hari-
            </option>
            <option value={"1"}>&lt; Rp. 400.000</option>
            <option value={"2"}>Rp. 400.000 - Rp. 600.000</option>
            <option value={"3"}>&gt; Rp. 600.000</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label>Status</Form.Label>
          <Form.Select ref={statusRef}>
            <option value={""} hidden>
              Status
            </option>
            <option value={false}>Tersedia</option>
            <option value={true}>Disewa</option>
          </Form.Select>
        </div>
        <GreenButton title={"Cari Mobil"} type="submit" />
      </Form>
      <div className="searchResult">
        <div className="searchResult-Card"></div>
      </div>
    </div>
  );
};

export default SearchCar;
