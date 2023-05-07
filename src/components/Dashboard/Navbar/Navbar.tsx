import ProfileSection from "./extra/ProfileSection";
import LinkSection from "./extra/LinkSection";
import LogoSection from "./extra/LogoSection";
import "./navbar.css";

function Navbar({userId, avatar}: {userId: string | undefined, avatar: string | undefined}) {
    return (
        <nav className="navbar-wrapper" style={{marginBottom: "0.5rem"}}>
            <div className="dashboard-nav">
                <LogoSection/>
                <LinkSection/>
                <ProfileSection userId={userId} avatar={avatar}/>
            </div>
        </nav>
    )
}

export default Navbar;