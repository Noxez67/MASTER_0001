import {Button, Card, styled, Tooltip, tooltipClasses, TooltipProps, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {FcInvite} from "react-icons/fc";
import {Fragment} from "react";
import {AiFillInfoCircle, AiFillAlert} from "react-icons/ai";

const HtmlTooltip = styled(({className, ...props}: TooltipProps) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

function InviteServer() {
    return (
        <Card variant="elevation" className="p-1 server-card" style={{height: "100%"}}>
            <div>
                <Link
                    to="https://discord.com/api/oauth2/authorize?client_id=1058454390144512101&permissions=8&scope=bot"
                    target="_blank">
                    <Button startIcon={<FcInvite/>} variant="contained" size="large" style={{fontWeight: "bold"}}
                            color="success">Invite to Server</Button>
                </Link>
                <HtmlTooltip
                    style={{margin: "0.5rem"}}
                    title={
                        <Fragment>
                            <Typography color="inherit" style={{display: "flex", alignItems: "center", justifyContent: "center"}}><AiFillAlert size={"30"}/>ATTENTION!</Typography>
                            {"Server must have "}<strong>{"at least "} <u>{"5 members."}</u></strong>
                            <br/>
                            {"If it does not, bot will automatically leave."}
                        </Fragment>
                    }
                >
                    <Button><AiFillInfoCircle size="30"/></Button>
                </HtmlTooltip>
            </div>
        </Card>
    )
}

export default InviteServer;