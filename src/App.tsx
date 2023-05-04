import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import DashboardRaid from "./pages/Dashboard/DashboardRaid/DashboardRaid";
import DashboardRaidList from "./pages/Dashboard/DashboardRaidList/DashboardRaidList";
import DashboardConfig from "./pages/Dashboard/DashboardConfig/DashboardConfig";
import {createTheme, ThemeProvider} from "@mui/material";
import DashboardRaidServer from "./pages/Dashboard/DashboardRaidServer/DashboardRaidServer";

const router = createHashRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "login",
        element: <LoginPage/>
    },
    {
        path: "register",
        element: <RegisterPage/>
    },
    {
        path: "dashboard",
        element:
        // <ProtectedRoute token={localStorage.getItem("userToken") ?? ""}>
            <DashboardHome/>
        //</ProtectedRoute>


    },
    {
        path: "dashboard/raid",
        element: <DashboardRaid/>
    },
    {
        path: "dashboard/raidlist",
        element: <DashboardRaidList/>
    },
    {
        path: "dashboard/config",
        element: <DashboardConfig/>
    },
    {
        path: "dashboard/raid/:id",
        element: <DashboardRaidServer/>
    }
]);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
