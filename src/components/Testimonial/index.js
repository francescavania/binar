import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import { FiStar } from "react-icons/fi";

const Testimonial = () => {
  const testiItem = [
    {
      id: 1,
      rating: 5,
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”",
      name: "John Dee",
      age: "32",
      location: "Bromo",
      image: "https://picsum.photos/400/300",
    },
    {
      id: 2,
      rating: 4,
      text: "“Sed auctor orci sit amet nisi faucibus, sit amet euismod velit eleifend. Sed consectetur nulla ac purus pellentesque, in hendrerit arcu fringilla. Aenean semper enim vitae metus dictum, vel rutrum tortor pretium. Donec nec metus feugiat, lacinia ipsum vel, tincidunt sapien.”",
      name: "Jane Smith",
      age: "27",
      location: "Sydney",
      image: "https://placeimg.com/400/300/people",
    },
    {
      id: 3,
      rating: 3,
      text: "“Vestibulum quis risus sit amet justo sodales pharetra. Sed eu nunc eu quam malesuada interdum. Praesent congue massa id erat laoreet, sit amet suscipit ex gravida. Nam nec nisl non enim malesuada posuere nec at est.”",
      name: "Mark Johnson",
      age: "40",
      location: "New York",
      image: "https://via.placeholder.com/400x300?text=Mark",
    },
    {
      id: 4,
      rating: 5,
      text: "“In sed sapien at nibh euismod pellentesque. Sed hendrerit nisi eget nulla consectetur consequat. Nam vel odio eget sapien bibendum imperdiet. Fusce dignissim ex a velit gravida, sit amet tristique tortor eleifend.”",
      name: "Emily Chen",
      age: "29",
      location: "Los Angeles",
      image: "https://picsum.photos/400/300/?blur",
    },
    {
      id: 5,
      rating: 2,
      text: "“Nulla facilisi. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae sapien in augue vehicula pulvinar. Donec et purus non nulla dictum egestas id id augue.”",
      name: "David Lee",
      age: "35",
      location: "Toronto",
      image: "https://placeimg.com/400/300/arch",
    },
  ];

  return (
    <div id="testimonial">
      <div className="testimonial-title">
        <h3>Testimonial</h3>
        <p>Berbagai review positif dari para pelanggan kami</p>
      </div>
      <Carousel
        variant="dark"
        controls={false}
        indicators={false}
        className="carousel-container"
      >
        {testiItem.map((item) => {
          return (
            <Carousel.Item>
              <div className="caraousel-item">
                <img src={item.image} alt="testi img" />
                <div className="carousel-desc">
                  {[...Array(item.rating)].map((e, i) => (
                    <FiStar />
                  ))}
                  <div className="carousel-text">{item.text}</div>
                  <div>
                    {item.name} {item.age}, {item.location}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonial;
