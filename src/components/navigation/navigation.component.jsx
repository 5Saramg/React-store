import { Link } from "react-router-dom";
import "./navigation.styles.jsx";
import { useContext } from "react";
//import { ReactComponent as GoldenLogo } from "../../assets/icon-gunter.svg";
//import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg";
//import { ReactComponent as SignInIcon } from "../../assets/icon-signIn.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import MiniCart from "../cart/mini-cart/mini-cart.component";
import MiniCartDropdown from "../cart/mini-cart/mini-cart-dropdown.component";
import { CartDialogContext } from "../../context/cartDialog.context";
import { NavigationBarLogoStyle, NavigationBarStyle, NavigationBarLinksStyle,NavigationBarMenuCartStyle, NavigationBarMenuStyle } from "./navigation.styles.jsx";

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDialogContext);

  return (
    <NavigationBarStyle className="container">
    <div className="navigation-bar__logo">
        <NavigationBarLinksStyle to="/">
          <NavigationBarLogoStyle src="./assets/img/base-logo.png" alt="Logo">
          </NavigationBarLogoStyle>
        </NavigationBarLinksStyle>
      </div>
      <NavigationBarMenuStyle>
        {currentUser ? (
          <span onClick={signOutUser}>Log Out</span>
        ) : (
          <NavigationBarLinksStyle to="/signIn" className="signIn-link">
            Login
          </NavigationBarLinksStyle>
        )}
        <NavigationBarLinksStyle to="/shop">Comprar</NavigationBarLinksStyle>
        <NavigationBarLinksStyle to="/rebajas">Rebajas</NavigationBarLinksStyle>
        <NavigationBarMenuCartStyle>
          <MiniCart></MiniCart>
        </NavigationBarMenuCartStyle>
        {isCartOpen && <MiniCartDropdown/>}
      </NavigationBarMenuStyle>

    </NavigationBarStyle>
  );
};

export default NavigationBar;
