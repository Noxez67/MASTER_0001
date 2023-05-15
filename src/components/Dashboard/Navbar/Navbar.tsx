import ProfileSection from "./extra/ProfileSection";
import LinkSection from "./extra/LinkSection";
import LogoSection from "./extra/LogoSection";
import "./navbar.css";
import MobileLinkSection from "./extra/MobileLinkSection";

function Navbar({userId, avatar, userName}: {userId: string | undefined, avatar: string | undefined, userName: string | undefined}) {
    return (
        <nav className="navbar-wrapper">
            <div className="dashboard-nav">
                <LogoSection/>
                <LinkSection/>
                <MobileLinkSection/>
                <ProfileSection userId={userId} avatar={avatar} userName={userName}/>
            </div>
        </nav>
    )
}

export default Navbar;