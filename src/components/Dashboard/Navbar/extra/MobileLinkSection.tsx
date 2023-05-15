import {Link} from "react-router-dom";
import {useState} from "react";
import {Button, Menu, MenuItem} from "@mui/material";
import {AiOutlineMenu} from "react-icons/ai";

function MobileLinkSection() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <section className="mobile-link-section">
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <AiOutlineMenu size="40"/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link to="/dashboard/raid" className="nd-link">
                    <MenuItem onClick={handleClose}>
                        Raid
                    </MenuItem>
                </Link>

                <Link to="/dashboard/raidlist" className="nd-link">

                    <MenuItem onClick={handleClose}>
                        Raid List
                    </MenuItem>
                </Link>

                <Link to="/dashboard/config" className="nd-link">
                    <MenuItem onClick={handleClose}>
                        Configuration
                    </MenuItem>
                </Link>

            </Menu>
        </section>
    )
}

export default MobileLinkSection;