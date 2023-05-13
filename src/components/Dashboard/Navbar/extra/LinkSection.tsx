import {Link} from "react-router-dom";

function LinkSection() {
    return (
        <section className="link-section">
            <ul>
                <Link to="/dashboard/raid">
                    <li>
                        Raid
                    </li>
                </Link>
                <Link to="/dashboard/raidlist">
                    <li>
                        Raid List
                    </li>
                </Link>
                <Link to="/dashboard/config">
                    <li>
                        Configuration
                    </li>
                </Link>
            </ul>
        </section>
    )
}

export default LinkSection;