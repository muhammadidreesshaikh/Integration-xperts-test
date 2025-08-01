import "../assets/css/category-circle.css";
import type { Category } from "../types/category";

const CategoryCircle = (data: Category) => {
  return (
    <a href={data.link}>
      <div className="card-circle">
        <img src={data.image} alt={`circle-${data.id}`} />
      </div>
    </a>
  );
};

export default CategoryCircle;
