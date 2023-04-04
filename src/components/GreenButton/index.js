import "./style.css";

const GreenButton = ({ title, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};

export default GreenButton;
