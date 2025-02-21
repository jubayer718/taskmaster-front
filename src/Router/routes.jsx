import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import Signin from "../page/Signin/Signin";
import Register from "../page/Register/Register";
// import TaskBoard from "../page/taskboard/TaskBoard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
       
      },
      // {
      //   path: "/task",
      //   element:<TaskBoard></TaskBoard>
      // }
      , {
        path: "/login",
        element:<Signin></Signin>
      }, {
        path: "/register",
        element:<Register></Register>
      }
    ]
  }
])
export default routes