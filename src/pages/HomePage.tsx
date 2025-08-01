import CategoryCircle from "../components/CategoryCircle";
import Latest from "../components/Latest";
import MeterChart from "../components/MeterChart";
import PieChart from "../components/PieChart";
import { categories } from "../mock-data/categories.data";
import { news } from "../mock-data/news.data";

import "../assets/css/home.css";


const Home = () => {
  return (
    <div>
      <div className="homepage">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">

              <div className="user-card">
                <h2>Welcome User</h2>

                <div className="category">
                  <div className="category-scroll">
                    {
                      categories.map((category, index) => (
                        <CategoryCircle {...category} key={index} />
                      ))
                    }
                  </div>
                </div>

                {/* latest-news */}
                <div className="latest">
                  <div className="latest-grid">
                   {
                    news.map((latestnews, index) => (
                      <Latest {...latestnews} key={index}/> 
                    ))
                   }
                  </div>
                </div>

                {/* chart-section */}
                <div className="chart-section">
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