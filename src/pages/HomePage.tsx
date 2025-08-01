import CategoryCircle from "../components/CategoryCircle";
import LatestNewsCard from "../components/LatestNewsCard";
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

                {/* categories-list */}
                <div className="category">

                  <h4>Categories List</h4>

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

                  <h4>Latest News</h4>

                  <div className="latest-grid">
                    {
                      news.map((latestnews, index) => (
                        <LatestNewsCard {...latestnews} key={index} />
                      ))
                    }
                  </div>
                </div>

                {/* chart-section */}
                <div className="chart-section">

                  <h4>Statistics</h4>

                  <div className="row">
                    <div className="col-md-6 col-12">
                      <MeterChart />
                    </div>

                    <div className="col-md-6 col-12">
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