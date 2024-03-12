import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/nav/Navbar"
import Footer from "../components/footer/Footer"


const Products = () => {
    return (
        <><Navbar />
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer /></>
    )
}

export default Products