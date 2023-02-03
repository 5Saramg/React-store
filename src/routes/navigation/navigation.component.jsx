import NavigationBar from "../../components/navigation/navigation.component";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";


const Navigation = () => {
    return (
      <Fragment>
        <NavigationBar/>
        <Outlet></Outlet>
      </Fragment>
    );
  };

export default Navigation;