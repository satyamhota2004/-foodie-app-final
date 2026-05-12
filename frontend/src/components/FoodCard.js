function FoodCard({ food }) {
  const foodEmoji = {
    Pizza: "🍕",
    Burger: "🍔",
    "Chicken Biryani": "🍛",
    "Veg Pulao": "🍚",
    "Paneer Butter Masala": "🥘",
    "Chicken Roll": "🌯",
    "Veg Fried Rice": "🍜",
    Momos: "🥟",
    "French Fries": "🍟",
    "Cold Coffee": "🥤"
  };

  return (
    <div className="food-card">
      <div style={{ fontSize: "70px", textAlign: "center" }}>
        {foodEmoji[food.name] || "🍽️"}
      </div>

      <h3>{food.name}</h3>

      <p>₹{food.price}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default FoodCard;