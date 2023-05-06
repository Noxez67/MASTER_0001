import {Card, Container, Grid} from "@mui/material";

import "./serverinfo.css";

type serverInfoTypes = {
    url: string;
    serverName: string;
    serverId: string;
    serverMembers: number;
}

function ServerInfo({url, serverName, serverId, serverMembers}: serverInfoTypes) {
    return (
        <section className="server-info">
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card variant="elevation" style={{textAlign: "center", padding: "0.55rem"}}>
                            <img src={url} alt="Server" className="default-img"/>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card variant="elevation" style={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            padding: "0 0.55rem"
                        }}>
                            <h1>{serverName}</h1>
                            <h4>{serverId}</h4>
                            <h4>{serverMembers} Members</h4>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

        </section>
    )
}

export default ServerInfo;