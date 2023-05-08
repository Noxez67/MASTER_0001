import {Navigate, useParams} from 'react-router-dom';
import RaidTasks from "../../../components/DashboardRaidServer/RaidTasks/RaidTasks";
import {Container} from "@mui/material";
import TaskList from "../../../components/DashboardRaidServer/TaskList/TaskList";

import "./dashboardraidserver.css";
import ServerInfo from "../../../components/DashboardRaidServer/ServerInfo/ServerInfo";
import {useServers} from "../Dashboard/Dashboard";
function DashboardRaidServer() {
    const {servers} = useServers();
    const {id} = useParams();
    const server = servers?.find(s => s.serverId === id);

    if (id == null || server == null) return <Navigate to="/dashboard"/>

    return (
        <section className="dashboard-view">
            <Container maxWidth="xl">
                <ServerInfo url={server?.serverIcon ?? "https://https://placehold.co/200x200"}
                            serverName={server?.serverName ?? "No Name"}/>
                <RaidTasks id={id}/>
                <TaskList serverId={id}/>
            </Container>
        </section>
    )
}

export default DashboardRaidServer;