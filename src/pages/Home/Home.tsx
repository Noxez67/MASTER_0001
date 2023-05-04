import "./presentation.css";

import {Button, Container, Grid} from "@mui/material";
import {FiLogIn} from "react-icons/fi";
import {GiArchiveRegister} from "react-icons/gi";

import botImage from "./images/robot_bg.png";
import {Link} from "react-router-dom";
import PresentationHeader from "./extra/PresentationHeader";

function Home() {
    return (
        <section className="presentation">
            <PresentationHeader fontSize="5rem"/>
            <h3>The most efficient and innovative Raid Bot.</h3>
            <img src={botImage} alt="Bot image" width="500" style={{maxWidth: "95%", height: "auto"}}/>
            <Container maxWidth="xs">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Link to="login">
                            <Button variant="contained" size="large" style={{fontWeight: "bold"}} startIcon={<FiLogIn/>}
                                    className="dark-button">Log In</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Link to="register">
                            <Button variant="contained" size="large" style={{fontWeight: "bold"}}
                                    startIcon={<GiArchiveRegister/>} className="dark-button">Register</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default Home;