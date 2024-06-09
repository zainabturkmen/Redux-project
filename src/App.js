import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  const { cartItems } = useSelector();
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
