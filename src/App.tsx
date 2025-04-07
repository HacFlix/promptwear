import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ProfilePage from "./pages/Profile";
import DesignsPage from "./pages/Designs";
import CreatePage from "./pages/Create";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartContextProvider from "./context/CartContext";
import CartPage from "./pages/Cart";

const App = () => {
  return (
    <CartContextProvider>
      <div className="px-10">
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/designs" element={<DesignsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </CartContextProvider>
  );
};
export default App;
