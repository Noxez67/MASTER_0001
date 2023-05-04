import {Button, Card} from "@mui/material";
import {Link} from "react-router-dom";
import {FcInvite} from "react-icons/fc";

function InviteServer() {
    return (
        <Card variant="elevation" className="p-1 server-card" style={{height: "100%"}}>
            <Link to="https://google.com" target="_blank">
                <Button startIcon={<FcInvite/>} variant="contained" size="large" style={{fontWeight: "bold"}}
                        color="success">Invite to Server</Button>
            </Link>
        </Card>
    )
}

export default InviteServer;