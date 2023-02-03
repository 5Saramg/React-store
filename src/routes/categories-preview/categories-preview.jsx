import { Fragment, useContext } from "react";
import CategoriesPreviewComponente from "../../components/categories-preview/categories-preview";
import CategoryComponent from "../../components/category/category.component";
import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreviewRoute = () => {
  const {categoriesMap} = useContext(CategoriesContext);
  return (
    <Fragment className="categories-preview-container">
    {Object.keys(categoriesMap).map((title) => {
      const products= categoriesMap[title];
      return <CategoriesPreviewComponente></CategoriesPreviewComponente>
    })}
    </Fragment>
  );
};

export default CategoriesPreviewRoute;
