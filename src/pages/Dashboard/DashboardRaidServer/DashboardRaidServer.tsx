import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import {Navigate, useParams} from 'react-router-dom';
import RaidTasks from "../../../components/DashboardRaidServer/RaidTasks/RaidTasks";
import {Container} from "@mui/material";
import TaskList from "../../../components/DashboardRaidServer/TaskList/TaskList";

import "./dashboardraidserver.css";
import ServerInfo from "../../../components/DashboardRaidServer/ServerInfo/ServerInfo";

function DashboardRaidServer() {
    const {id} = useParams();
    if (id == null) return <Navigate to="/dashboard"/>

    return (
        <section className="dashboard-view">
            <Navbar/>

                <Container maxWidth="xl">
                    <ServerInfo url="https://placehold.co/200x200" serverId="000011112222333" serverName="Dead destroyers" serverMembers={69}/>
                    <RaidTasks id={id}/>
                    <TaskList/>
                </Container>
        </section>
    )
}

export default DashboardRaidServer;