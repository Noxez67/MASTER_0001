import {Grid} from "@mui/material";
import ServerEl from "./extra/ServerEl";
import InviteServer from "./extra/InviteServer";
import {useServers} from "../../../pages/Dashboard/Dashboard/Dashboard";

function ServerList() {
    const { servers } = useServers();


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={3} marginY={1}>
                <InviteServer/>
            </Grid>
            {servers && servers.map(s => <Grid key={s.serverId + "-grid"} item xs={12} sm={6} lg={3} marginY={1}>
                <ServerEl serverId={s.serverId}
                          serverName={s.serverName}
                          serverIcon={s.serverIcon}
                          key={s.serverId}
                />
            </Grid>)}
        </Grid>
    )
}

export default ServerList;