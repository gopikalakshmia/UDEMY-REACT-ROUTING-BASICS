import { Outlet } from "react-router-dom";
import MainHeader from "./MainNavigation";

function MainLayout() {
    return ( <>
    <MainHeader/>
    <Outlet/>
    </> );
}

export default MainLayout;