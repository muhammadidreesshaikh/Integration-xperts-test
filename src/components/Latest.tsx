import Img1 from "../assets/img/1.jpg";
import Img2 from "../assets/img/2.jpg";
import Img3 from "../assets/img/3.png";
import Img4 from "../assets/img/4.png";
import Img5 from "../assets/img/5.jpg";

import "../assets/css/latest.css";

const Latest = () => {
    return (
        <div className="latest">
            <h4>Latest</h4>
            <div className="latest-grid">
                <div className="card-square"><img src={Img1} alt="Latest 1" /></div>
                <div className="card-square"><img src={Img2} alt="Latest 2" /></div>
                <div className="card-square"><img src={Img3} alt="Latest 3" /></div>
                <div className="card-square"><img src={Img4} alt="Latest 4" /></div>
                <div className="card-square"><img src={Img5} alt="Latest 5" /></div>
            </div>
        </div>
    );
};

export default Latest;
