import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Logout from "../Pages/Logout";
import Login from "../Pages/Login";
import UserHome from "../Pages/UserHome";
import Home from "../Pages/Home";

const Routes=()=>{
    const {token}=useAuth();

    const routesForPublic=[
        {
            path:"/service",
            element:<div>Service Page</div>
        },
        {
            path:"/about-us",
            element:<div>About Us Page</div>
        }
    ]
    const routesForAuth=[
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
              {
                path: "",
                element: <UserHome/>,
              },
              {
                path: "/profile",
                element: <div>User Profile</div>,
              },
              {
                path: "/logout",
                element: <Logout/>,
              },
            ],
          },
    ]
    const routesForNotAuthenticatedOnly = [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ];

    const router=createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuth
    ])

    return <RouterProvider router={router}/>
}

export default Routes;