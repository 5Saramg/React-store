import { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategoryComponent from "../../components/category/category.component";
import ProductCard from "../../components/product/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import CategoriesPreviewRoute from "../categories-preview/categories-preview";

import './shop.styles.scss'

const Shop = () => {
  return (
    <Routes>
    <Route index element={<CategoriesPreviewRoute></CategoriesPreviewRoute>}></Route>
    <Route path=":categoryName" element={CategoryComponent}></Route>
    </Routes>
  );
};

export default Shop;
