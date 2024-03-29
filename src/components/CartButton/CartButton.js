import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";
import classes from "./CartButton.css";

export default function CartButton({ productId }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(add(productId));
  }

  return (
    <button
     className={classes.CartButton} 
     onClick={onAddToCart}>
      Add to cart
    </button>
  );
}