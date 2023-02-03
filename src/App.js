import "./app.styles.scss";
import "./components/category/category.styles.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import { Rebajas } from "./routes/rebajas/rebajas.component";
import SignIn from "./routes/signIn/signIn.component";
import Shop from "./routes/shop/shop.component";
import CheckoutRoute from "./routes/checkout/checkout.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="rebajas" element={<Rebajas />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="cart" element={<Rebajas />} />
        <Route path="checkout" element={<CheckoutRoute />}/></Route>
    </Routes>
  );
};

export default App;
