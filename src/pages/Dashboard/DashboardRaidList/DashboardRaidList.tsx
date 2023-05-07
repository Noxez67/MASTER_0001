import Navbar from "../../../components/Dashboard/Navbar/Navbar";
import {useEffect, useState} from "react";
import ITokenUser from "../DashboardRaid/types/ITokenUser";
import jwt_decode from "jwt-decode";
import LinkModal from "../../../components/Dashboard/LinkModal";

function DashboardRaidList() {
    const [open, setOpen] = useState(false);
    const [userToken, setUserToken] = useState<ITokenUser>();
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        const tokenInfo: ITokenUser = jwt_decode(token);
        setUserToken(tokenInfo);
        if (!tokenInfo || !tokenInfo.discordId) setOpen(true);
    }, []);

    return (
        <>
            <Navbar avatar={userToken?.avatar} userId={userToken?.discordId} userName={userToken?.user}/>
            <h1>Dashboard Raid List</h1>
            <LinkModal open={open} handleClose={handleClose}/>
        </>
    )
}

export default DashboardRaidList;