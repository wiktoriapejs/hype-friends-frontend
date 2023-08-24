import { Outlet } from "react-router-dom";
import Header from "./pages/Header";

export default function Layout(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}