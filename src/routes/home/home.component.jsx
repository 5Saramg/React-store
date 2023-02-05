import { Outlet } from "react-router-dom";
import CategoryComponent from "../../components/category/category.component";
import DirectoryComponent from "../../components/directory/directory";
//import "./app.styles.scss";

const Home = () => {

  return (
    <div>
      <DirectoryComponent>
        <Outlet/>
      </DirectoryComponent>
    </div>
  );
};

export default Home;
