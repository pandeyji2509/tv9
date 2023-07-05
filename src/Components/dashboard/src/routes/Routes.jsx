import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import DashBoardHome from "../pages/Dashboard/DashBoardHome";
import UserManagement from "../pages/Dashboard/UserManagement";
import ManageRole from "../pages/Dashboard/ManageRole";
import ManageUser from "../pages/Dashboard/ManageUser";
import PostManagement from "../pages/Dashboard/PostManagement";
import ManagePost from "../pages/Dashboard/ManagePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
        {
            path: "/",
            element: <DashBoardHome></DashBoardHome>
        },
        {
            path: "user-management",
            element: <UserManagement></UserManagement>,
            children: [
                {
                    path: "",
                    element: <ManageUser></ManageUser>
                },
                {
                    path: "manage-role",
                    element: <ManageRole></ManageRole>
                }
            ]
        },
        {
            path: "post-management",
            element: <PostManagement></PostManagement>,
            children: [
                {
                    path: "",
                    element: <ManagePost></ManagePost>
                }
            ]
        }
    ]
  },
]);

export default router;
