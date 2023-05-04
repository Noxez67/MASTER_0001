import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import { useParams } from 'react-router-dom';

function DashboardRaidServer() {
    const {id} = useParams();

    return (
        <>
            <Navbar/>
            <h1>Dashboard Raid Server {id ?? "no id found"}</h1>
        </>

    )
}

export default DashboardRaidServer;