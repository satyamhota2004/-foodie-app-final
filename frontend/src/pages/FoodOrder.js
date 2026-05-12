import { Link } from "react-router-dom";
import "./FoodOrder.css";

const categories = [
  ["🍨", "Ice Cream", "icecream"],
  ["🍛", "Biryani", "biryani"],
  ["🍜", "Noodles", "noodles"],
  ["🌯", "Rolls", "rolls"],
  ["🍕", "Pizza", "pizza"],
  ["🍰", "Cakes", "cakes"],
  ["🍟", "Fries", "fries"],
  ["🥪", "Sandwich", "sandwich"],
  ["🥘", "Paneer", "paneer"],
  ["🍗", "Chicken", "chicken"]
];

const restaurants = [
  {
    name: "Garam Masala",
    food: "Indian, Chinese",
    rating: "4.3",
    price: "₹250 for two",
    offer: "₹166 off above ₹299",
    emoji: "🍛"
  },
  {
    name: "Burger House",
    food: "Burger, Fast Food",
    rating: "4.1",
    price: "₹199 for two",
    offer: "50% OFF",
    emoji: "🍔"
  },
  {
    name: "Pizza Club",
    food: "Pizza, Italian",
    rating: "4.5",
    price: "₹300 for two",
    offer: "Buy 1 Get 1",
    emoji: "🍕"
  },
  {
    name: "Sweet World",
    food: "Cake, Dessert",
    rating: "4.4",
    price: "₹180 for two",
    offer: "20% OFF",
    emoji: "🍰"
  }
];

function FoodOrder() {
  return (
    <div className="swiggy-page">

      <div className="swiggy-header">
        <h2>📍 Foodie Delivery</h2>

        <p>Fast food delivery near you</p>

        <Link to="/search" className="swiggy-search">
          🔍 Search for biryani, pizza, rolls
        </Link>
      </div>

      <div className="sale-banner">
        <h1>FOODIE SALE</h1>
        <p>Deals auto applied at checkout</p>
      </div>

      <h2 className="swiggy-title">
        What's on your mind?
      </h2>

      <div className="category-scroll">
        {categories.map((item, index) => (
          <Link
            to={`/category/${item[2]}`}
            className="category-item"
            key={index}
          >
            <div>{item[0]}</div>

            <p>{item[1]}</p>
          </Link>
        ))}
      </div>

      <h2 className="swiggy-title">
        More on Foodie
      </h2>

      <div className="offer-row">
        <div className="offer-box">99 Store</div>
        <div className="offer-box">Offer Zone</div>
        <div className="offer-box">Bolt 10 mins</div>
        <div className="offer-box">Eat Right</div>
      </div>

      <div className="filter-row">
        <button>Filter ⚙</button>
        <button>Sort by ⌄</button>
        <button>⚡ Near & Fast</button>
      </div>

      <h2 className="swiggy-title">
        Top restaurants to explore
      </h2>

      <div className="restaurant-list">

        {restaurants.map((res, index) => (

          <div className="restaurant-card" key={index}>

            <div className="restaurant-img">
              <span>{res.emoji}</span>

              <div className="offer-tag">
                {res.offer}
              </div>
            </div>

            <div className="restaurant-info">

              <h2>{res.name}</h2>

              <p>
                ⭐ {res.rating} • {res.food}
              </p>

              <p>{res.price}</p>

              <button
                onClick={() => {

                  const cart =
                    JSON.parse(localStorage.getItem("cart")) || [];

                  cart.push({
                    name: res.name,
                    price: 199,
                    emoji: res.emoji
                  });

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(cart)
                  );

                  alert("Added to cart");

                }}
              >
                ADD
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FoodOrder;