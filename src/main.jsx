import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leyout from './Leyout/Leyout';
import Home from './Page/Home';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import { Authporvider } from './Provider/Authporvider';
import Profile from './Page/Profile/Profile';
import Dashboard from './Component/Dashboard/Dashboard';
import ContactUs from './Component/ContactUs/ContactUs';
import DashbordRiview from './Component/Dashboard/DashboardRiview';
import PrivetRoute from './Provider/PrivetRoute';
import DashboardHome from './Component/Dashboard/Sidebar/DashboardHome';
import TaskMenagement from './Component/Dashboard/Sidebar/TaskMenagement';
import CreateNewTask from './Component/Dashboard/AddTask/CreateNewTask';
import { Toaster } from 'react-hot-toast';
const router = createBrowserRouter([
   
  {
    path: "/",
    element: <Leyout></Leyout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>
        ),
        children: [
          { path: "riview", element: <DashbordRiview /> },
          {
            path: "CreateTask",
            element: <CreateNewTask />  ,
          },
          {
            path: "dashboardUser",
            element: <DashboardHome />,
          },
          {
            path: "taskManagement",
            element: <TaskMenagement/>,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authporvider>
      <Toaster />
      <RouterProvider router={router} />
    </Authporvider>
  </React.StrictMode>
);
