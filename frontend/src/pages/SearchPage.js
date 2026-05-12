import { useState } from "react";

const foodItems = [
  { name: "Chicken Biryani", emoji: "🍛", price: 199 },
  { name: "Pizza", emoji: "🍕", price: 299 },
  { name: "Burger", emoji: "🍔", price: 149 },
  { name: "Momos", emoji: "🥟", price: 89 },
  { name: "French Fries", emoji: "🍟", price: 79 },
  { name: "Chicken Roll", emoji: "🌯", price: 99 },
  { name: "Noodles", emoji: "🍜", price: 119 },
  { name: "Sandwich", emoji: "🥪", price: 99 },
  { name: "Ice Cream", emoji: "🍨", price: 80 },
  { name: "Cake", emoji: "🍰", price: 150 }
];

function SearchPage() {
  const [search, setSearch] = useState("");

  const filtered = foodItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">
      <div className="search-top">
        <input
          autoFocus
          type="text"
          placeholder="Search for restaurant, item or more"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2>Popular Searches</h2>

      <div className="search-list">
        {filtered.map((item, index) => (
          <div className="search-card" key={index}>
            <span className="search-emoji">{item.emoji}</span>

            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <button>ADD</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;