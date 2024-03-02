import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/nav/Navbar"


const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer>Foot</footer>
        </>
    )
}

export default Main