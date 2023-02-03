import { createContext, useEffect, useState } from "react";

const addCartItem = (cart, productToCart) => {
  if (!cart.length > 0) {
    return [
      {
        quantity: 1,
        ...productToCart,
      },
    ];
  } else {
    const productExist = cart.find((item) => item.id === productToCart.id);
    if (productExist) {
      return cart.map((item) => item.id === productToCart.id ? {...item, quantity: item.quantity +1} : item )
    } else {
      return  [...cart,
        {
          quantity: 1,
          ...productToCart,
        }]
    }
  }
};

const removeItemFromCart = (cart, product) => {
  const productExist = cart.find((item) => item.id === product.id);
  if(productExist.quantity === 1){
    return cart.filter(cartItem => cartItem.id !== product.id)
  }

  return cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity -1} : item)
}

const deleteItemFromCart = (cart, product) =>{
  const productExist = cart.find((item) => item.id === product.id);
  if(productExist){
    return cart.filter(cartItem => cartItem.id !== product.id)
  }
}

const changeAmountCart = (cart) =>{
  let finalAmount=0;
  cart.forEach(element => {
    finalAmount = finalAmount + element.quantity;
  });
  return finalAmount;
}

export const CartDialogContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  setCartCount: () =>{},
  removeItemToCart: () => {},
  cartTotal: 0,
  setCartTotal: () =>{},
  
});

export const CartDialogProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [amountCart, setAmountCart] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() =>{
    setAmountCart(changeAmountCart(cartItems));
  },[cartItems])

  useEffect(() =>{
    const newCartTotal= cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price,0)
    setCartTotal(newCartTotal)
  },[cartItems])

  const addItemToCart = (productToCart) => {
    setCartItems(addCartItem(cartItems, productToCart));    
  };

  const removeItemToCart = (product)=>{
    setCartItems(removeItemFromCart(cartItems, product))
  }

  const deleteItemToCart =(product) =>{
    setCartItems(deleteItemFromCart(cartItems, product))
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, amountCart, setAmountCart, cartTotal, setCartTotal, removeItemToCart, deleteItemToCart };
  return (
    <CartDialogContext.Provider value={value}>
      {children}
    </CartDialogContext.Provider>
  );
};
