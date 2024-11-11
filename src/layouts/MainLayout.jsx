import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-2 min-h-[calc(100vh-292px)]"> 
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};

export default MainLayout;