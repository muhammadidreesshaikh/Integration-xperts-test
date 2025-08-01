import Img1 from "../assets/img/1.jpg";
import Img2 from "../assets/img/2.jpg";
import Img3 from "../assets/img/3.png";
import Img4 from "../assets/img/4.png";
import Img5 from "../assets/img/5.jpg";
import Img6 from "../assets/img/2.jpg";
import Img7 from "../assets/img/1.jpg";

import "../assets/css/category-circle.css";

const CategoryCircle = () => {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7,];

  return (
    <div>
      <div className="category">
        <h4>Card Contains List</h4>
        <div className="category-scroll">
          {images.map((imgSrc, index) => (
            <div key={index} className="card-circle">
              <img src={imgSrc} alt={`circle-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCircle;
