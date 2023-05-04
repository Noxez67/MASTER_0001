import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import {Container} from "@mui/material";
import ServerList from "../../../components/DashboardRaid/ServerList/ServerList";

function DashboardRaid() {
    return (
        <>
            <Navbar/>
            <Container maxWidth="xl">
                <ServerList/>
            </Container>
        </>
    )
}

export default DashboardRaid;