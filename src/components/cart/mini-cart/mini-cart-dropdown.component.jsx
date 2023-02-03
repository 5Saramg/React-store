import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartDialogContext } from "../../../context/cartDialog.context";
import CartItem from "../cart-item/cart-item.component";
import "./mini-cart-dropdown.styles.scss";

const MiniCartDropdown = () => {
  const { cartItems } = useContext(CartDialogContext);
  return (
    <div className="mini-cart-dropdown">
      <div className="mini-cart-dropdown__items">
      {
        cartItems.length ? (
          cartItems.map((product) => {
            return(<CartItem key={product.id} cartItem={product}></CartItem>)
          })
        ):(
          <spa>Tu carrito esta vacío</spa>
        )
      }
      </div>
      <Link to='/checkout' className="mini-cart-dropdown__cart">Ir al carrito</Link>
    </div>
  );
};

export default MiniCartDropdown;
