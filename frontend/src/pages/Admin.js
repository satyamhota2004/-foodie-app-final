import "./Admin.css";

function Admin() {
  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>

      <p className="admin-subtitle">
        Manage your Foodie App professionally
      </p>

      <div className="admin-cards">

        <div className="admin-card">
          <h2>🍔 Food Management</h2>
          <p>Add, edit and delete food items easily.</p>
        </div>

        <div className="admin-card">
          <h2>📦 Orders</h2>
          <p>Track customer orders and delivery updates.</p>
        </div>

        <div className="admin-card">
          <h2>📊 Inventory</h2>
          <p>Monitor stock and ingredient availability.</p>
        </div>

        <div className="admin-card">
          <h2>💰 Payments</h2>
          <p>View payment history and revenue reports.</p>
        </div>

      </div>
    </div>
  );
}

export default Admin;