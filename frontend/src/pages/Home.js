import { useEffect, useState } from "react";
import API from "../services/api";
import FoodCard from "../components/FoodCard";

function Home() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    API.get("/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="zomato-home">
      <div className="top-section">
        <h2>📍 Foodie App</h2>
        <p>Order your favourite food fast</p>

        <div className="search-box">
          🔍 Search "biryani, pizza, burger"
        </div>

        <div className="banner">
          <h1>FLASH SALE</h1>
          <p>Flat 50% OFF on selected items</p>
          <button>Order Now</button>
        </div>
      </div>

      <div className="category-row">
        <div>🍽️<p>All</p></div>
        <div>🍔<p>Burger</p></div>
        <div>🌯<p>Rolls</p></div>
        <div>🍕<p>Pizza</p></div>
        <div>🍛<p>Biryani</p></div>
      </div>

      <div className="filter-row">
        <button>⚙ Filters</button>
        <button>⚡ Near & Fast</button>
        <button>🥦 Veg Mode</button>
      </div>

      <h2 className="section-title">RECOMMENDED WITH DEALS</h2>

      <div className="food-grid">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}

export default Home;