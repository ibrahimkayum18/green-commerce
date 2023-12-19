import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ShoppingCart from "../Pages/Cart/ShoppingCart";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/products',
                element:<Products />
            },
            {
                path:'/about',
                element:<AboutUs />
            },
            {
                path:'contact',
                element:<ContactUs />
            },
            {
                path:'/cart',
                element:<ShoppingCart />
            }
        ]
    }
])

export default Router;