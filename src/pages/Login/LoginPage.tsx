import {FormEvent, useState} from "react";
import {Button, Container, TextField} from "@mui/material";
import {Link, Navigate, useNavigate} from "react-router-dom";
import PresentationHeader from "../Home/extra/PresentationHeader";
import axios from "axios";
import {AuthStatus} from "../../hooks/Auth";

const {apiUrl} = require("../../config.json");

function LoginPage() {
    const {loggedIn, checkingStatus} = AuthStatus();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const loginPost = await axios.post(`${apiUrl}/login`, {
                user,
                password
            });

            setUser("");
            setPassword("");

            if (loginPost.status === 200 && loginPost.data && loginPost.data.token) {
                localStorage.setItem("token", loginPost.data.token);
                navigate("/dashboard");
            } else {
                alert(loginPost.data.msg ?? "Error");
            }
        } catch (e) {
            alert("ERROR: " + e);
        }
    }

    if (checkingStatus) return null;

    return loggedIn ? <Navigate to="/dashboard"/> : (
        <main className="full-height-center">
            <Container maxWidth="xs" className="form-outer">
                <PresentationHeader fontSize="3rem" text="Login"/>
                <form action="" className="form" onSubmit={submitLogin}>

                    <TextField margin="normal" id="user" label="User" variant="outlined" type="text"
                               placeholder="Username" value={user} onChange={e => setUser(e.currentTarget.value)}/>

                    <TextField margin="normal" id="password" label="Password" variant="outlined" type="password"
                               placeholder="Password" value={password}
                               onChange={e => setPassword(e.currentTarget.value)}/>

                    <Button variant="contained" style={{marginTop: "0.5rem", color: "#fff", fontWeight: "bold"}}
                            color="success" type="submit" size="large"
                            disabled={password.length === 0 || user.length === 0}>Submit</Button>
                </form>
                <Link to="/register">Go to Register</Link>
            </Container>
        </main>
    )
}

export default LoginPage;