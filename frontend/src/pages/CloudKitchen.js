import { useEffect, useState } from "react";
import API from "../services/api";

function CloudKitchen() {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const res = await API.get("/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/orders/${id}/status`, { status });
    getOrders();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>🍽️ Cloud Kitchen Orders</h1>
      <p>Restaurant receives and manages customer orders here.</p>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            background: "white",
            padding: "20px",
            margin: "15px 0",
            borderRadius: "15px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h2>Order #{order._id}</h2>
          <p><b>Customer:</b> {order.customerName}</p>
          <p><b>Total:</b> ₹{order.total}</p>
          <p><b>Status:</b> {order.status}</p>

          <h3>Items</h3>
          {order.items.map((item, index) => (
            <p key={index}>{item.emoji} {item.name} - ₹{item.price}</p>
          ))}

          <button onClick={() => updateStatus(order._id, "Accepted")}>
            Accept Order
          </button>

          <button onClick={() => updateStatus(order._id, "Preparing")}>
            Preparing
          </button>

          <button onClick={() => updateStatus(order._id, "Ready")}>
            Ready
          </button>

          <button onClick={() => updateStatus(order._id, "Delivered")}>
            Delivered
          </button>
        </div>
      ))}
    </div>
  );
}

export default CloudKitchen;