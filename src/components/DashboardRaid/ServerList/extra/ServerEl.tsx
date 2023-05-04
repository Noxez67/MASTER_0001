import {Button, Card} from "@mui/material";
import Server from "../types/Server";
import {Link} from "react-router-dom";
import {GiBrickWall} from "react-icons/gi";

import "./serverel.css";

function ServerEl({serverId, serverName, serverIcon}: Server) {
    return (
        <Card variant="elevation" className="p-1 server-card" style={{height: "100%"}}>
            <img src={serverIcon} alt={serverName} className="default-img"/>
            <h1>{serverName}</h1>
            <Link to={serverId}>
                <Button variant="contained" size="large" style={{fontWeight: "bold"}}
                        startIcon={<GiBrickWall/>} color="error">RAID</Button>
            </Link>
        </Card>
    )
}

export default ServerEl;