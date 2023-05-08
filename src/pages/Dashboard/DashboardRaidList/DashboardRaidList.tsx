import RaidList from "../../../components/DashboardRaidList/RaidList/RaidList";
import {Container} from "@mui/material";

function DashboardRaidList() {

    return (
        <>
            <Container maxWidth="lg" style={{textAlign: "center"}}>
                <h1>RBOT TOP RAIDS</h1>
                <RaidList/>
            </Container>
        </>
    )
}

export default DashboardRaidList;