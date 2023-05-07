import {Button, Card} from "@mui/material";
import {Link} from "react-router-dom";
import {FcInvite} from "react-icons/fc";

function InviteServer() {
    return (
        <Card variant="elevation" className="p-1 server-card" style={{height: "100%"}}>
            <Link to="https://discord.com/api/oauth2/authorize?client_id=1058454390144512101&permissions=8&scope=bot" target="_blank">
                <Button startIcon={<FcInvite/>} variant="contained" size="large" style={{fontWeight: "bold"}}
                        color="success">Invite to Server</Button>
            </Link>
        </Card>
    )
}

export default InviteServer;