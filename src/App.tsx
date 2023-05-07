import React, {useEffect} from 'react';
import {createBrowserRouter, createHashRouter, Navigate, RouterProvider} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DashboardRaid from "./pages/Dashboard/DashboardRaid/DashboardRaid";
import DashboardRaidList from "./pages/Dashboard/DashboardRaidList/DashboardRaidList";
import DashboardConfig from "./pages/Dashboard/DashboardConfig/DashboardConfig";
import {createTheme, ThemeProvider} from "@mui/material";
import DashboardRaidServer from "./pages/Dashboard/DashboardRaidServer/DashboardRaidServer";
import {socket, SocketContext} from './socket/socketManager';

const router = createBrowserRouter([
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
            <ProtectedRoute token={localStorage.getItem("token") ?? ""}>
                <Navigate to="/dashboard/raid"/>
            </ProtectedRoute>
    },
    {
        path: "dashboard/raid",
        element:
            <ProtectedRoute token={localStorage.getItem("token") ?? ""}>
                <DashboardRaid/>
            </ProtectedRoute>
    },
    {
        path: "dashboard/raidlist",
        element:
            <ProtectedRoute token={localStorage.getItem("token") ?? ""}>
                <DashboardRaidList/>
            </ProtectedRoute>
    },
    {
        path: "dashboard/config",
        element:
            <ProtectedRoute token={localStorage.getItem("token") ?? ""}>
                <DashboardConfig/>
            </ProtectedRoute>
    },
    {
        path: "dashboard/raid/:id",
        element:
            <ProtectedRoute token={localStorage.getItem("token") ?? ""}>
                <DashboardRaidServer/>
            </ProtectedRoute>
    }
]);

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

function App() {

    useEffect(() => {
        socket.emit("join", "hola");
    }, []);

    return (
        <SocketContext.Provider value={socket}>
            <ThemeProvider theme={darkTheme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </SocketContext.Provider>
    );
}

export default App;
