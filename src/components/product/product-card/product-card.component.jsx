import { useContext } from "react";
import { CartDialogContext } from "../../../context/cartDialog.context";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartDialogContext);
  const { imageUrl, name, price } = product;
  const addProductToCart =() =>{
    addItemToCart(product)
  }
  return (
    <div className="product-card">
      <img src={imageUrl} alt={`Product ${name}`}></img>
      <div className="product-card__info">
        <p className="product-card__info-name">{name}</p>
        <p className="product-card__info-price">${price}</p>
      </div>
      <button onClick={addProductToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
