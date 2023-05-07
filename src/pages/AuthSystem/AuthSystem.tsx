import {useNavigate, useSearchParams} from 'react-router-dom';
import {useEffect} from "react";
import axios from "axios";

const {apiUrl} = require("../../config.json");


function AuthSystem() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const code = searchParams.get("code");
        if (!code) return navigate("/dashboard");

        axios.get(`${apiUrl}/dcauth?code=${code}`, {
            headers: {
                Authorization: localStorage.getItem("token") ?? ""
            }
        })
            .then((res) => {
               if (res.status === 200 && res.data.token) {
                   localStorage.setItem("token", res.data.token);
                   navigate("/dashboard");
               }
            })
            .catch((e) => alert(e));
    }, [navigate, searchParams]);

    return (
        <div>
        </div>
    )
}

export default AuthSystem;