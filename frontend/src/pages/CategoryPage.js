import { useParams, Link } from "react-router-dom";
import "./CategoryPage.css";

const restaurantData = {
  biryani: [
    { name: "Biryani Palace", rating: 4.4, time: "30-35 mins", offer: "50% OFF", emoji: "🍛" },
    { name: "Hyderabadi House", rating: 4.2, time: "25-30 mins", offer: "₹100 OFF", emoji: "🍛" }
  ],
  pizza: [
    { name: "Pizza Club", rating: 4.5, time: "25-30 mins", offer: "Buy 1 Get 1", emoji: "🍕" },
    { name: "Italian Bite", rating: 4.3, time: "30-35 mins", offer: "40% OFF", emoji: "🍕" }
  ],
  burger: [
    { name: "Burger House", rating: 4.1, time: "20-25 mins", offer: "Flat 50% OFF", emoji: "🍔" },
    { name: "Crispy Burger", rating: 4.0, time: "25-30 mins", offer: "₹80 OFF", emoji: "🍔" }
  ],
  fries: [
    { name: "Snack Corner", rating: 4.2, time: "20 mins", offer: "30% OFF", emoji: "🍟" }
  ],
  rolls: [
    { name: "Roll Express", rating: 4.3, time: "25 mins", offer: "₹70 OFF", emoji: "🌯" }
  ],
  cakes: [
    { name: "Sweet World", rating: 4.4, time: "30 mins", offer: "20% OFF", emoji: "🍰" }
  ]
};

function CategoryPage() {
  const { categoryName } = useParams();

  const restaurants = restaurantData[categoryName] || [];

  return (
    <div className="category-page">
      <Link to="/" className="back-btn">← Back</Link>

      <h1>{categoryName.toUpperCase()} Restaurants</h1>
      <p>Choose your favourite restaurant</p>

      <div className="restaurant-list">
        {restaurants.map((res, index) => (
          <div className="restaurant-box" key={index}>
            <div className="restaurant-emoji">{res.emoji}</div>

            <div>
              <h2>{res.name}</h2>
              <p>⭐ {res.rating} • {res.time}</p>
              <p className="offer">{res.offer}</p>
            </div>

            <button>View Menu</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;