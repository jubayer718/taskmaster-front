import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home";
import Signin from "../page/Signin/Signin";
import Register from "../page/Register/Register";
import AddTask from "../page/AddTask/AddTask";
import PrivateRoute from "../Components/Private/PrivateRoute";
// import TaskBoard from "../page/taskboard/TaskBoard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>
       
      }, {
        path: "/add-task",
        element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
      }
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