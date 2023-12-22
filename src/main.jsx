import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Leyout from "./Leyout/Leyout";
import Home from "./Page/Home";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import { Authporvider } from "./Provider/Authporvider";
import Profile from "./Page/Profile/Profile";
import Dashboard from "./Component/Dashboard/Dashboard";
import ContactUs from "./Component/ContactUs/ContactUs";
import DashbordRiview from "./Component/Dashboard/DashboardRiview";
import PrivetRoute from "./Provider/PrivetRoute";
import DashboardHome from "./Component/Dashboard/Sidebar/DashboardHome";
import TaskMenagement from "./Component/Dashboard/Sidebar/TaskMenagement";
import CreateNewTask from "./Component/Dashboard/AddTask/CreateNewTask";
import { Toaster } from "react-hot-toast";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import TaskLists from "./Component/Dashboard/TaskList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditTask from "./Component/Dashboard/AddTask/UpdateTask";
const queryClient = new QueryClient();

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
            element: (
              <PrivetRoute>
                <CreateNewTask />
              </PrivetRoute>
            ),
          },
          {
            path: "dashboardUser",
            element: (
              <PrivetRoute>
                <DashboardHome />
              </PrivetRoute>
            ),
          },
          {
            path: "taskManagement",
            element: (
              <PrivetRoute>
                <TaskMenagement />
              </PrivetRoute>
            ),
          },
          {
            path: "taskList",
            element: (
              <PrivetRoute>
                <TaskLists></TaskLists>
              </PrivetRoute>
            ),
          },
          {
            path: "editTask/:id",
            element: (
              <PrivetRoute>
                <EditTask />
              </PrivetRoute>
            ),
            loader: ({ params }) =>
              fetch(
                `https://task-management-server-inky-two.vercel.app/tasks/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authporvider>
        <DndProvider backend={HTML5Backend}>
          <Toaster />
          <RouterProvider router={router} />
        </DndProvider>
      </Authporvider>
    </QueryClientProvider>
  </React.StrictMode>
);
