import { FiThumbsUp, FiTag, FiClock, FiAward } from "react-icons/fi";
import "./style.css";

const WhyUs = () => {
  const whyUsCardItem = [
    {
      id: 1,
      icon: (
        <div className="whyus-icon-thumbs whyus-icons">
          <FiThumbsUp className="whyus-icon" />
        </div>
      ),
      title: "Mobil Lengkap",
      desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      id: 2,
      icon: (
        <div className="whyus-icon-tag whyus-icons">
          <FiTag className="whyus-icon" />
        </div>
      ),
      title: "Harga Murah",
      desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      id: 3,
      icon: (
        <div className="whyus-icon-clock whyus-icons">
          <FiClock className="whyus-icon" />
        </div>
      ),
      title: "Layanan 24 Jam",
      desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      id: 4,
      icon: (
        <div className="whyus-icon-award whyus-icons">
          <FiAward className="whyus-icon" />
        </div>
      ),
      title: "Sopir Profesional",
      desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];
  return (
    <div id="whyus">
      <h3>Why Us?</h3>
      <p>Mengapa harus pilih Binar Car Rental?</p>
      <div className="whyus-cards">
        {whyUsCardItem.map((item, i) => {
          return (
            <div className="whyus-card" key={i}>
              {item.icon}
              <h5 className="whyus-card-title">{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyUs;
