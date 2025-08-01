import type { LatestNews } from "../types/latestnews";

import "../assets/css/latest.css";

const Latest = (data: LatestNews) => {
    return (
        <a href={data.link}>
            <div className="latest-card">
                <img src={data.image} alt={`latest-${data.id}`} />
            </div>
        </a>
    );
};

export default Latest;
