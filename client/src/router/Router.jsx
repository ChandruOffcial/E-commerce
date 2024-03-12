import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Products from "../layout/Products";
import Productspage from "../pages/products/Productspage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }, {
        path: "/products",
        element: <Products />,
        children: [
            {
                path: "/products",
                element: <Productspage />

            }
        ]
    }
]);
export default router