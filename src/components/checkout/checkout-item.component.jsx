import { Fragment, useContext } from "react";
import { CartDialogContext } from "../../context/cartDialog.context";
//import "../cart-item.styles.scss";
import "../cart/cart-item/cart-item.styles.scss"

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { deleteItemToCart, removeItemToCart, addItemToCart } = useContext(CartDialogContext);
  const decreaseProduct = () => {
    removeItemToCart(cartItem);
  };
  const increaseProduct = () => {
    addItemToCart(cartItem);
  };
  const deleteItem =() =>{
    console.log('Eliminar Item')
    deleteItemToCart(cartItem)
  }

  return (
    <Fragment>
      <div className="cart__item">
        <img src={imageUrl} alt={`Producto ${name}`}></img>
        <div className="cart__item-info">
          <div> {name}</div>
          <div>
            {quantity} x ${price}
          </div>
        </div>

        <div className="cart__item-info-checkout">
          <div> {name}</div>
          <div className="cart__item-info-checkout__price">${price}</div>
          <div className="cart__item-info-checkout__quantity">
            <button onClick={decreaseProduct}>-</button>
            <input type="number" value={quantity} />
            <button onClick={increaseProduct}>+</button>
          </div>
          <div>{price * quantity}</div>
        </div>
      </div>

      <div className="checkout__item__close" onClick={deleteItem}>&#10005;</div>
    </Fragment>
  );
};

export default CheckoutItem;
