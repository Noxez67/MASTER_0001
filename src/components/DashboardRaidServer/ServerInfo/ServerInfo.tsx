import {Card, Container} from "@mui/material";

import "./serverinfo.css";

type serverInfoTypes = {
    url: string;
    serverName: string;
}

function ServerInfo({url, serverName}: serverInfoTypes) {
    return (
        <section className="server-info">
            <Container maxWidth="xs">
                        <Card variant="outlined" style={{textAlign: "center", padding: "0.55rem"}}>
                            <img src={url} alt="Server" className="rounded-img"/>
                            <h1>{serverName}</h1>
                        </Card>
            </Container>

        </section>
    )
}

export default ServerInfo;