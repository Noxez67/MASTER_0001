import {Button, Container, TextField} from "@mui/material";
import PresentationHeader from "../../pages/Home/extra/PresentationHeader";
import {FormEvent, useEffect, useState} from "react";
import axios from "axios";
import ITokenUser from "../../pages/Dashboard/DashboardRaid/types/ITokenUser";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import SuccessModal from "./SuccessModal";
import BoostModal from "./BoostModal";

const {apiUrl} = require("../../config.json");

function ConfigForm() {
    const [channelName, setChannelName] = useState("");
    const [guildName, setGuildName] = useState("");
    const [titleContent, setTitleContent] = useState("");
    const [descContent, setDescContent] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [discordUrl, setDiscordUrl] = useState("");
    const [imgLink, setImgLink] = useState("");

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const [boostOpen, setBoostOpen] = useState(false);
    const handleBoostClose = () => navigate("/dashboard");

    const navigate = useNavigate();

    const submitCustomization = async (e: FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) return navigate("/login");

        const tokenInfo: ITokenUser = jwt_decode(token);

        try {
            const req = await axios.post(`${apiUrl}/rbot/${tokenInfo.discordId}`, {
                channelName,
                guildName,
                titleContent,
                descContent,
                youtubeUrl,
                discordUrl,
                imgLink
            }, {
                headers: {
                    "Authorization": token
                }
            });

            if (req.status === 401) navigate("/login");

            setOpen(true);

        } catch (e) {
            navigate("/login");
        }

    }

    useEffect(() => {

        const token = localStorage.getItem("token");
        if (!token) return navigate("/login");

        const tokenInfo: ITokenUser = jwt_decode(token);

        axios.get(`${apiUrl}/rbot/${tokenInfo.discordId}`, {
            headers: {
                "Authorization": localStorage.getItem("token") ?? ""
            }
        })
            .then(res => {
                if (res.status === 401) navigate("/login");
                if (res.status !== 200 || !res.data.rbot) return;

                const {channelName, guildName, titleContent, descContent, youtubeUrl, discordUrl, imgLink} = res.data.rbot;

                setChannelName(channelName ?? "");
                setGuildName(guildName ?? "");
                setTitleContent(titleContent ?? "");
                setDescContent(descContent ?? "");
                setYoutubeUrl(youtubeUrl ?? "");
                setDiscordUrl(discordUrl ?? "");
                setImgLink(imgLink ?? "");
            })
            .catch((e) => {
                console.log(e.response.status);
                if (!axios.isAxiosError(e)) return navigate("/login");
                if (e.response?.status === 404) setBoostOpen(true);
                else navigate("/login");
            });

    }, [navigate]);

    return (
        <Container maxWidth="md" className="form-outer">
            <PresentationHeader fontSize="3rem" text="Customization"/>
            <form className="form" onSubmit={submitCustomization}>

                <TextField margin="normal" id="channelName" label="Channel Name" variant="outlined" type="text"
                           placeholder="Channel Name" value={channelName}
                           onChange={e => setChannelName(e.currentTarget.value)}/>

                <TextField margin="normal" id="guildName" label="Guild Name" variant="outlined" type="text"
                           placeholder="Guild Name" value={guildName}
                           onChange={e => setGuildName(e.currentTarget.value)}/>

                <TextField inputProps={{maxLength: 50}} margin="normal" id="titleContent" label="Embed Title"
                           variant="outlined" type="text"
                           placeholder="Embed Title" value={titleContent}
                           onChange={e => setTitleContent(e.currentTarget.value)}/>

                <TextField inputProps={{maxLength: 150}} margin="normal" id="descContent" label="Embed Message"
                           variant="outlined" type="text"
                           placeholder="Embed Message" value={descContent}
                           onChange={e => setDescContent(e.currentTarget.value)}/>

                <TextField margin="normal" id="youtubeUrl" label="Youtube URL" variant="outlined" type="text"
                           placeholder="Youtube URL" value={youtubeUrl}
                           onChange={e => setYoutubeUrl(e.currentTarget.value)}/>

                <TextField margin="normal" id="discordUrl" label="Discord URL" variant="outlined" type="text"
                           placeholder="Discord URL" value={discordUrl}
                           onChange={e => setDiscordUrl(e.currentTarget.value)}/>

                <TextField margin="normal" id="imgLink" label="Image Link" variant="outlined" type="text"
                           placeholder="Image Link" value={imgLink} onChange={e => setImgLink(e.currentTarget.value)}/>

                <Button variant="contained" style={{marginTop: "0.5rem", color: "#fff", fontWeight: "bold"}}
                        color="success" type="submit" size="large">Update</Button>
            </form>
            <SuccessModal open={open} handleClose={handleClose}/>
            <BoostModal open={boostOpen} handleClose={handleBoostClose}/>
        </Container>
    )
}

export default ConfigForm;