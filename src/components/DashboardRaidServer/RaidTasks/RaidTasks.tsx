import {Button, Grid} from "@mui/material";
import {FaBomb} from "react-icons/fa";
import {HiBan} from "react-icons/hi";
import {GiHighKick} from "react-icons/gi";
import {RiAdminFill} from "react-icons/ri";
import {BsFillEmojiAngryFill, BsPersonVcardFill} from "react-icons/bs";
import {useServers} from "../../../pages/Dashboard/Dashboard/Dashboard";

type RaidTasksTypes = {
    id: string
}

function RaidTasks({id}: RaidTasksTypes) {
    const {socket} = useServers();

    if (!socket) return null;

    const nukeFn = () => {
        console.log(socket);
        socket.emit("nuke", id);
    }

    const banallFn = () => {
        socket.emit("banall", id);
    }

    const kickallFn = () => {
        socket.emit("kickall", id);
    }

    const adminFn = () => {
        console.log(socket);

        socket.emit("admin", id);
    }

    const roleFn = () => {
        console.log(socket);
        socket.emit("role", id);
    }

    const emojiFn = () => {
        socket.emit("emoji", id);
    }

    return (
        <Grid container spacing={2} paddingY="0.5rem">
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<FaBomb/>} color="error" onClick={nukeFn}>NUKE</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<HiBan/>} color="error" onClick={banallFn}>BANALL</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<GiHighKick/>} color="error" onClick={kickallFn}>KICKALL</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<RiAdminFill/>} color="error" onClick={adminFn}>ADMIN</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<BsFillEmojiAngryFill/>} color="error" onClick={roleFn}>ROLE</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<BsPersonVcardFill/>} color="error" onClick={emojiFn}>EMOJI</Button>
            </Grid>
        </Grid>
    )
}

export default RaidTasks;