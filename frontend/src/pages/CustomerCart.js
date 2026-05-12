import { useEffect, useState } from "react";
import API from "../services/api";

function CustomerCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const payNow = async () => {
    try {

      const { data } = await API.post(
        "/payment/create-order",
        {
          amount: total
        }
      );

      const options = {
        key: "rzp_test_SoBU1RLvaQxirJ",

        amount: data.amount,

        currency: "INR",

        name: "Foodie",

        description: "Food Payment",

        order_id: data.id,

        handler: async function (response) {

          alert("Payment Successful");

          console.log(response);

          localStorage.removeItem("cart");

          setCart([]);

        },

        prefill: {
          name: "Satyam",
          email: "foodie@test.com",
          contact: "9999999999"
        },

        theme: {
          color: "#ff5a00"
        }
      };

      const razor = new window.Razorpay(options);

      razor.on("payment.failed", function (response) {

        console.log(response);

        alert("Payment Failed");

      });

      razor.open();

    } catch (error) {

      console.log(error);

      alert("Oops! Something went wrong.");

    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>🛒 My Cart</h1>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "10px"
          }}
        >
          <h2>
            {item.emoji} {item.name}
          </h2>

          <p>₹{item.price}</p>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <button
        onClick={payNow}
        style={{
          background: "#ff5a00",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Pay with Razorpay
      </button>

    </div>
  );
}

export default CustomerCart;