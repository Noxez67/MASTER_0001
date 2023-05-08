import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DashboardRaid from "./pages/Dashboard/DashboardRaid/DashboardRaid";
import DashboardRaidList from "./pages/Dashboard/DashboardRaidList/DashboardRaidList";
import DashboardConfig from "./pages/Dashboard/DashboardConfig/DashboardConfig";
import {createTheme, ThemeProvider} from "@mui/material";
import DashboardRaidServer from "./pages/Dashboard/DashboardRaidServer/DashboardRaidServer";
import AuthSystem from "./pages/AuthSystem/AuthSystem";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "login",
        element:
            <LoginPage/>
    },
    {
        path: "register",
        element: <RegisterPage/>
    },
    {
        path: "dashboard",
        element:
            <ProtectedRoute token={localStorage.getItem("token") ?? ""}>
                <Dashboard/>
            </ProtectedRoute>
        ,
        children: [
            {
                path: "",
                element:
                    <DashboardRaid/>
            },
            {
                path: "raid",
                element:
                    <DashboardRaid/>
            },
            {
                path: "raidlist",
                element:
                    <DashboardRaidList/>
            },
            {
                path: "config",
                element:
                    <DashboardConfig/>
            },
            {
                path: "raid/:id",
                element:
                    <DashboardRaidServer/>
            },
        ]
    },

    {
        path: "dcauth",
        element:
            <ProtectedRoute token={localStorage.getItem("token") ?? ""}>
                <AuthSystem/>
            </ProtectedRoute>

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
