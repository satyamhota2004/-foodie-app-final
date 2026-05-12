import { useEffect, useState } from "react";
import API from "../services/api";

function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await API.get("/orders");
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id, status) => {
    await API.put(`/orders/${id}/status`, { status });
    fetchOrders();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>📦 Restaurant Orders</h1>

      {orders.map((order) => (
        <div key={order._id} style={{
          background: "white",
          padding: "20px",
          margin: "15px 0",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
        }}>
          <h2>Order ID: {order._id}</h2>
          <p><b>Customer:</b> {order.customerName}</p>
          <p><b>Total:</b> ₹{order.total}</p>
          <p><b>Status:</b> {order.status}</p>

          <h3>Items:</h3>
          {order.items.map((item, index) => (
            <p key={index}>{item.name} - ₹{item.price}</p>
          ))}

          <button onClick={() => updateStatus(order._id, "Accepted")}>
            Accept
          </button>

          <button onClick={() => updateStatus(order._id, "Preparing")}>
            Preparing
          </button>

          <button onClick={() => updateStatus(order._id, "Delivered")}>
            Delivered
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminOrders;