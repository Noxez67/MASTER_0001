import {IoNotificationsOutline} from "react-icons/io5";

function ProfileSection({userId, avatar}: {userId: string | undefined, avatar: string | undefined}) {
    return (
        <section className="profile-section">
            <IoNotificationsOutline size="30"/>
            <img src="https://placehold.co/50x50" alt="Avatar"/>
            <h4>Taxalo</h4>
        </section>
    )
}

export default ProfileSection;