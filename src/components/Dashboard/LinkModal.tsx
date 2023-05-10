import {Box, Button, Modal} from "@mui/material";
import {Link} from "react-router-dom";

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


function LinkModal({open, handleClose}: {open: boolean, handleClose: any}) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <h2>Your discord account is not linked.</h2>
                <p>Click the following button to link it now.</p>
                <Link
                    to="https://discord.com/api/oauth2/authorize?client_id=1104888598165196800&redirect_uri=https%3A%2F%2Frbot.ac%2Fdcauth&response_type=code&scope=identify%20guilds">
                    <Button variant="contained" style={{marginTop: "0.5rem", color: "#fff", fontWeight: "bold"}}
                            color="success" size="large">Link</Button>
                </Link>
            </Box>
        </Modal>
    )
}

export default LinkModal;