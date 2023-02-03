import { useContext } from "react";
import { CartDialogContext } from "../../context/cartDialog.context";
import "./checkout.styles.scss";
import CartItem from "../cart/cart-item/cart-item.component";
import CheckoutItem from "./checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal, deleteItemToCart } = useContext(CartDialogContext);
  return (
    <div className="container checkout">
      <div className="checkout__items">
        {cartItems.map((item) => {
          return (
            <div className="checkout__item">
              <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
            </div>
          );
        })}
        
      </div>
      <div div className="checkout__order-summary">
        <div>Total</div> <div>{cartTotal}</div>
      </div>
    </div>
  );
};

export default Checkout;
