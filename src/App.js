import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { store } from "./store";
import {useEffect} from "react"
import Modal from "./Components/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch  = useDispatch()

  useEffect(() => {
   dispatch(calculateTotal())
  }, [cartItems]);

  return (
    <main>
      <Modal/>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
