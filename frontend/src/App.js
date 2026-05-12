import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import FoodOrder from "./pages/FoodOrder";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import POS from "./pages/Pos";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import CustomerCart from "./pages/CustomerCart";
import CloudKitchen from "./pages/CloudKitchen";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<FoodOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CustomerCart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pos" element={<POS />} />
        <Route path="/food-order" element={<FoodOrder />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/customer-cart" element={<CustomerCart />} />
        <Route path="/cloud-kitchen" element={<CloudKitchen />} />

      </Routes>
    </>
  );
}

export default App;