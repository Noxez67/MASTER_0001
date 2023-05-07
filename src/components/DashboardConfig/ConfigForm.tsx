import {Button, Container, TextField} from "@mui/material";
import PresentationHeader from "../../pages/Home/extra/PresentationHeader";
import {useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";

function ConfigForm() {
    const [channelName, setChannelName] = useState("");
    const [guildName, setGuildName] = useState("");
    const [titleContent, setTitleContent] = useState("");
    const [descContent, setDescContent] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
    const [discordUrl, setDiscordUrl] = useState("");
    const [imgLink, setImgLink] = useState("");
    const navigate = useNavigate();

    const submitCustomization = (e: FormEvent) => {
        e.preventDefault();
        // fetch
        navigate("/dashboard");
    }

    return (
        <Container maxWidth="md" className="form-outer">
            <PresentationHeader fontSize="3rem" text="Customization"/>
            <form action="" className="form" onSubmit={submitCustomization}>

                <TextField margin="normal" id="channelName" label="Channel Name" variant="outlined" type="text"
                           placeholder="Channel Name" value={channelName} onChange={e => setChannelName(e.currentTarget.value)}/>

                <TextField margin="normal" id="guildName" label="Guild Name" variant="outlined" type="text"
                           placeholder="Guild Name" value={guildName} onChange={e => setGuildName(e.currentTarget.value)}/>

                <TextField inputProps={{maxLength: 50}} margin="normal" id="embedTitle" label="Embed Title" variant="outlined" type="text"
                           placeholder="Embed Title" value={titleContent} onChange={e => setTitleContent(e.currentTarget.value)}/>

                <TextField inputProps={{maxLength: 150}} margin="normal" id="embedDesc" label="Embed Message" variant="outlined" type="text"
                           placeholder="Embed Message" value={descContent} onChange={e => setDescContent(e.currentTarget.value)}/>

                <TextField margin="normal" id="youtubeUrl" label="Youtube URL" variant="outlined" type="text"
                           placeholder="Youtube URL" value={youtubeUrl} onChange={e => setYoutubeUrl(e.currentTarget.value)}/>

                <TextField margin="normal" id="discordUrl" label="Discord URL" variant="outlined" type="text"
                           placeholder="Discord URL" value={discordUrl} onChange={e => setDiscordUrl(e.currentTarget.value)}/>

                <TextField margin="normal" id="imgLink" label="Image Link" variant="outlined" type="text"
                           placeholder="Image Link" value={imgLink} onChange={e => setImgLink(e.currentTarget.value)}/>

                <Button variant="contained" style={{marginTop: "0.5rem", color: "#fff", fontWeight: "bold"}}
                        color="success" type="submit" size="large">Update</Button>
            </form>
        </Container>
    )
}

export default ConfigForm;