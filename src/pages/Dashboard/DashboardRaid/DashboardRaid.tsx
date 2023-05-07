import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import {Container} from "@mui/material";
import ServerList from "../../../components/DashboardRaid/ServerList/ServerList";
import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import ITokenUser from "./types/ITokenUser";
import LinkModal from "../../../components/Dashboard/LinkModal";

function DashboardRaid() {
    const [open, setOpen] = useState(false);
    const [userToken, setUserToken] = useState<ITokenUser>();
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        const tokenInfo: ITokenUser = jwt_decode(token);
        setUserToken(tokenInfo);
        console.log(tokenInfo);
        if (!tokenInfo || !tokenInfo.discordId) setOpen(true);
    }, []);

    return (
        <>
            <Navbar avatar={userToken?.avatar} userId={userToken?.discordId} userName={userToken?.user}/>
            <Container maxWidth="xl">
                <ServerList/>
            </Container>
            <LinkModal open={open} handleClose={handleClose}/>
        </>
    )
}

export default DashboardRaid;