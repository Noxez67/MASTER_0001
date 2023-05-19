import {Box, Button, Modal} from "@mui/material";
import {Link} from "react-router-dom";
import {BsDiscord} from "react-icons/bs";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};


function BoostModal({open, handleClose}: { open: boolean, handleClose: any }) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <h1>To Customize your RBOT you need to be boosting the following Discord server:</h1>
                <Link to="https://discord.com/invite/RqfkDwGg6y">
                    <Button variant="contained" style={{marginTop: "0.5rem", color: "#fff", fontWeight: "bold", backgroundColor: "#7289da"}}
                            color="inherit" type="submit" size="large" startIcon={<BsDiscord/>}>Discord Invite</Button>
                </Link>
            </Box>
        </Modal>
    )
}

export default BoostModal;