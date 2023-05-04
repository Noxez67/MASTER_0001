import {IoNotificationsOutline} from "react-icons/io5";

function ProfileSection() {
    return (
        <section className="profile-section">
            <IoNotificationsOutline size="30"/>
            <img src="https://placehold.co/50x50" alt="Avatar photo"/>
            <h4>Taxalo</h4>
        </section>
    )
}

export default ProfileSection;