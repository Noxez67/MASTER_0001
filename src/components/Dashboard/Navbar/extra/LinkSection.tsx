import {Link} from "react-router-dom";

function LinkSection() {
    return (
        <section className="link-section">
            <ul>
                <li>
                    <Link to="/dashboard/raid">Raid</Link>
                </li>
                <li>
                    <Link to="">Raid List</Link>
                </li>
                <li>
                    <Link to="/dashboard/config">Configuration</Link>
                </li>
            </ul>
        </section>
    )
}

export default LinkSection;