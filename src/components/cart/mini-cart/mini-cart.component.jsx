import { ReactComponent as CartIcon } from "../../../assets/shopping-cart.svg";
import {useContext} from "react";
import {CartDialogContext } from "../../../context/cartDialog.context";
import './mini-cart.styles.jsx';
import { ContainerMiniCartStyle, MiniCartAmountStyle } from "./mini-cart.styles.jsx";
import { NavigationSVGtStyle } from "../../navigation/navigation.styles";

const MiniCart = () => {
  const{setIsCartOpen, isCartOpen, amountCart} = useContext(CartDialogContext)
  const toggleDropdown = () =>{
    setIsCartOpen(!isCartOpen)
  }


  return (
    <ContainerMiniCartStyle>
      <CartIcon onClick={toggleDropdown}></CartIcon>
      <MiniCartAmountStyle>
        {amountCart}
      </MiniCartAmountStyle>
    </ContainerMiniCartStyle>
  );
};

export default MiniCart;
