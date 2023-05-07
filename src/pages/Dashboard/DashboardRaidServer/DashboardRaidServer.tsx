import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import {Navigate, useParams} from 'react-router-dom';
import RaidTasks from "../../../components/DashboardRaidServer/RaidTasks/RaidTasks";
import {Container} from "@mui/material";
import TaskList from "../../../components/DashboardRaidServer/TaskList/TaskList";

import "./dashboardraidserver.css";
import ServerInfo from "../../../components/DashboardRaidServer/ServerInfo/ServerInfo";
import LinkModal from "../../../components/Dashboard/LinkModal";
import {useEffect, useState} from "react";
import ITokenUser from "../DashboardRaid/types/ITokenUser";
import jwt_decode from "jwt-decode";

function DashboardRaidServer() {
    const [open, setOpen] = useState(false);
    const [userToken, setUserToken] = useState<ITokenUser>();
    const handleClose = () => setOpen(false);
    const {id} = useParams();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        const tokenInfo: ITokenUser = jwt_decode(token);
        setUserToken(tokenInfo);
        if (!tokenInfo || !tokenInfo.discordId) setOpen(true);
    }, []);

    if (id == null) return <Navigate to="/dashboard"/>

    return (
        <section className="dashboard-view">
            <Navbar avatar={userToken?.avatar} userId={userToken?.discordId}/>

            <Container maxWidth="xl">
                <ServerInfo url="https://placehold.co/200x200" serverId="000011112222333" serverName="Dead destroyers"
                            serverMembers={69}/>
                <RaidTasks id={id}/>
                <TaskList/>
            </Container>
            <LinkModal open={open} handleClose={handleClose}/>

        </section>
    )
}

export default DashboardRaidServer;