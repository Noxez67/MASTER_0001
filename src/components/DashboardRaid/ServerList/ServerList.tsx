import {Grid} from "@mui/material";
import Server from "./types/Server";
import ServerEl from "./extra/ServerEl";
import InviteServer from "./extra/InviteServer";

function ServerList() {
    const servers: Server[] = [
        {
            serverId: "0000111122223333",
            serverName: "Fast Destroyers",
            serverIcon: "https://placehold.co/200x200"
        },
        {
            serverId: "0000111122223331",
            serverName: "Dead Destroyers",
            serverIcon: "https://placehold.co/200x200"
        },
        {
            serverId: "0000111122223332",
            serverName: "uwu",
            serverIcon: "https://placehold.co/200x200"
        },
        {
            serverId: "0000111122223332",
            serverName: "uwu",
            serverIcon: "https://placehold.co/200x200"
        },
        {
            serverId: "0000111122223332",
            serverName: "uwu",
            serverIcon: "https://placehold.co/200x200"
        },
    ]
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} marginY={1}>
                <InviteServer/>
            </Grid>
            {servers.map(s => <Grid key={s.serverId + "-grid"} item xs={12} sm={6} md={3} marginY={1}>
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