import { createBrowserRouter, RouterProvider } from "react-router";
import { RomanNumberPage } from "../pages/RomanNumberPage";
import { GenerateRandomPasswordPage } from "../pages/GenerateRandomPasswordPage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<HomePage/>
    },{
        path:"/roman-number",
        element:<RomanNumberPage/>
    },{
        path:"/generate-random-password",
        element:<GenerateRandomPasswordPage/>
    }

])

export const MyRoutes = ()=>(<RouterProvider router={router}/>)