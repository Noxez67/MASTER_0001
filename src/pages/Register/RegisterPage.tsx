import {Button, Container, TextField} from "@mui/material";
import "../../globalStyles/form.css";
import {FormEvent, useState} from "react";
import {Link} from "react-router-dom";


function RegisterPage() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const submitRegister = (e: FormEvent) => {
        e.preventDefault();

        // fetch
    }

    const passwordCondition = password.length > 0 && password2.length > 0 && password !== password2;

    return (
        <main className="full-height-center">
            <Container maxWidth="xs" className="form-outer">
                <h1>REGISTER</h1>
                <form action="" className="form" onSubmit={submitRegister}>

                    <TextField margin="normal" id="user" label="User" variant="outlined" type="text"
                               placeholder="Username" value={user}
                               onChange={e => setUser(e.currentTarget.value)}/>

                    <TextField margin="normal" id="password" label="Password" variant="outlined" type="password"
                               placeholder="Password" value={password}
                               onChange={e => setPassword(e.currentTarget.value)}/>

                    <TextField margin="normal" id="password2" label="Repeat Password" variant="outlined"
                               type="password"
                               placeholder="Repeat Password" error={passwordCondition}
                               value={password2} onChange={e => setPassword2(e.currentTarget.value)}/>

                    <Button variant="contained" style={{marginTop: "0.5rem", color: "#fff", fontWeight: "bold"}}
                            color="success" type="submit" size="large"
                            disabled={passwordCondition || password.length === 0 || password2.length === 0 || user.length === 0}>Submit</Button>
                </form>
                <Link to="/login">Go to LogIn</Link>
            </Container>
        </main>
    )
}

export default RegisterPage;