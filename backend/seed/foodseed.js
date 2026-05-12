function FoodCard({ food }) {
  const foodEmoji = {
    "Chicken Biryani": "🍛",
    Pizza: "🍕",
    Burger: "🍔",
    "Veg Pulao": "🍚",
    "Paneer Butter Masala": "🥘",
    "Chicken Roll": "🌯",
    "Veg Fried Rice": "🍜",
    Momos: "🥟",
    "French Fries": "🍟",
    "Cold Coffee": "🥤"
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        width: "250px",
        margin: "10px"
      }}
    >
      <div style={{ fontSize: "80px" }}>
        {foodEmoji[food.name] || "🍽️"}
      </div>

      <h2>{food.name}</h2>

      <p>₹{food.price}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default FoodCard;