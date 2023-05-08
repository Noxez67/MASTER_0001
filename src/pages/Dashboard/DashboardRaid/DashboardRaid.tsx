import {Container} from "@mui/material";
import ServerList from "../../../components/DashboardRaid/ServerList/ServerList";
function DashboardRaid() {
    return (
        <>
            <Container maxWidth="xl">
                <ServerList/>
            </Container>
        </>
    )
}

export default DashboardRaid;