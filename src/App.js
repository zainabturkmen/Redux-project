import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
