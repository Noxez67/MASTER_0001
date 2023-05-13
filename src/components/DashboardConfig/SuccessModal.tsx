import {Box, Button, Modal} from "@mui/material";

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


function SuccessModal({open, handleClose}: { open: boolean, handleClose: any }) {
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <h1>Successfully updated</h1>
                <Button variant="contained" style={{marginTop: "0.5rem", color: "#fff", fontWeight: "bold"}}
                        color="success" type="submit" size="large" onClick={handleClose}>OK</Button>
            </Box>
        </Modal>
    )
}

export default SuccessModal;