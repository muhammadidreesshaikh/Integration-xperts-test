import CategoryCircle from "../components/categoryCircle";
import Latest from "../components/Latest";
import MeterChart from "../components/MeterChart";
import PieChart from "../components/PieChart";

import "../assets/css/home.css";


const Home = () => {
  return (
    <div>
      <div className="homepage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">

              <div className="user-card">
                <h2>Welcome User</h2>

                <CategoryCircle />
                <Latest />

                <div className="chart-section">
                  <h4>Stats</h4>

                  <div className="row">
                    <div className="col-6">
                      <MeterChart />
                    </div>

                    <div className="col-6">
                      <PieChart />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;