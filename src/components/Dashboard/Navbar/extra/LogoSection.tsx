import PresentationHeader from "../../../../pages/Home/extra/PresentationHeader";
import {Link} from "react-router-dom";

function LogoSection() {
    return (
        <section className="logo-section">
            <Link to="/dashboard" style={{textDecoration: "none"}}>
                <PresentationHeader fontSize="2rem"/>
            </Link>
        </section>
    )
}

export default LogoSection;