import {Button, Container, TextField} from "@mui/material";
import "../../globalStyles/form.css";
import {FormEvent, useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import PresentationHeader from "../Home/extra/PresentationHeader";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const {apiUrl, recaptcha} = require("../../config.json");


function RegisterPage() {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [captcha, setCaptcha] = useState("");
    const navigate = useNavigate();

    const submitRegister = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const registerPost = await axios.post(`${apiUrl}/register`, {
                user,
                password,
                captcha
            });

            if (registerPost.status === 401) navigate("/login");

            setUser("");
            setPassword("");
            setPassword2("");

            if (registerPost.status === 200 && registerPost.data && registerPost.data.token) {
                localStorage.setItem("token", registerPost.data.token);
                navigate("/dashboard");
            } else {
                alert(registerPost.data.msg ?? "Error");
            }
        } catch (e) {
            if (axios.isAxiosError(e)) alert("ERROR: " + e.response?.data.message ?? "Contact an administrator if you think this is an error");
        }

        recaptchaRef.current?.reset();
    }

    const passwordCondition = password.length > 0 && password2.length > 0 && password !== password2;

    return (
        <main className="full-height-center">
            <Container maxWidth="xs" className="form-outer">
                <PresentationHeader fontSize="3rem" text="Register"/>
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

                    <ReCAPTCHA
                        sitekey={recaptcha}
                        onChange={(v) => setCaptcha(v ?? "")}
                        theme="dark"
                        ref={recaptchaRef}
                    />

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