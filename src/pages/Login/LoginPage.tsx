import {FormEvent, useState} from "react";
import {Button, Container, TextField} from "@mui/material";
import {Link} from "react-router-dom";


function LoginPage() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (e: FormEvent) => {
        e.preventDefault();

        // fetch
    }

    return (
        <main className="full-height-center">
            <Container maxWidth="xs" className="form-outer">
                <h1>Login</h1>
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