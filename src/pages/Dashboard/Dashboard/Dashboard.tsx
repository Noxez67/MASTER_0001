import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import {useEffect, useState} from "react";
import ITokenUser from "../DashboardRaid/types/ITokenUser";
import Server from "../../../components/DashboardRaid/ServerList/types/Server";
import {Outlet, useNavigate, useOutletContext} from "react-router-dom";
import jwt_decode from "jwt-decode";
import LinkModal from "../../../components/Dashboard/LinkModal";
import io, {Socket} from "socket.io-client";

const {apiUrl} = require("../../../config.json");

type ServerContext = { servers: Server[] | null, socket: Socket | null };

function Dashboard() {
    const [open, setOpen] = useState(false);
    const [userToken, setUserToken] = useState<ITokenUser>();
    const handleClose = () => setOpen(false);

    const [servers, setServers] = useState<Server[]>([]);
    const [socket, setSocket] = useState<Socket>();
    const navigate = useNavigate();

    useEffect(() => {
        const newSocket: Socket = io(apiUrl, {
            extraHeaders: {
                "jwt": localStorage.getItem("token") ?? ""
            },
            timeout: 100
        });

        setSocket(newSocket);

        const token = localStorage.getItem("token");

        if (!token) return navigate("/login");

        const tokenInfo: ITokenUser = jwt_decode(token);
        setUserToken(tokenInfo);
        if (!tokenInfo || !tokenInfo.discordId) setOpen(true);

        try {
            newSocket.on("servers", (svs: Server[]) => {
                setServers(svs);
            });

            newSocket.on("newserver", (sv: Server) => {
                setServers(s => [...s, sv]);
            });

            newSocket.on("leave", () => {
                setOpen(true);
            });
        } catch (e) {
            console.log("ERROR1: " + e)
        }
    }, []);

    return (
        <>
            <Navbar avatar={userToken?.avatar} userId={userToken?.discordId} userName={userToken?.user}/>
            <Outlet context={{servers, socket}}/>
            <LinkModal open={open} handleClose={handleClose}/>
        </>
    )
}

export function useServers() {
    return useOutletContext<ServerContext>();
}

export default Dashboard;