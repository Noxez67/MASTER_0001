import {Button, Grid} from "@mui/material";
import {FaBomb} from "react-icons/fa";
import {HiBan} from "react-icons/hi";
import {GiHighKick} from "react-icons/gi";
import {RiAdminFill} from "react-icons/ri";
import {BsFillEmojiAngryFill, BsPersonVcardFill} from "react-icons/bs";

type RaidTasksTypes = {
    id: string
}

function RaidTasks({id}: RaidTasksTypes) {
    return (
        <Grid container spacing={2} paddingY="0.5rem">
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<FaBomb/>} color="error">NUKE</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<HiBan/>} color="error">BANALL</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<GiHighKick/>} color="error">KICKALL</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<RiAdminFill/>} color="error">ADMIN</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<BsFillEmojiAngryFill/>} color="error">ROLE</Button>
            </Grid>
            <Grid item xs>
                <Button variant="outlined" size="large" style={{fontWeight: "bold", width: "100%"}}
                        startIcon={<BsPersonVcardFill/>} color="error">EMOJI</Button>
            </Grid>
        </Grid>
    )
}

export default RaidTasks;