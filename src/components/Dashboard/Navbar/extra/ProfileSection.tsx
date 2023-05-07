import {IoNotificationsOutline} from "react-icons/io5";

function ProfileSection({userId, avatar, userName}: {userId: string | undefined, avatar: string | undefined, userName: string | undefined}) {
    let avatarImg = "https://placehold.co/50x50";
    if (userId && avatar) avatarImg = `https://cdn.discordapp.com/avatars/${userId}/${avatar}.jpg`
    return (
        <section className="profile-section">
            <IoNotificationsOutline size="30"/>
            <img src={avatarImg} alt="Avatar" width={50} height={50}/>
            <h4>{userName ?? "No name"}</h4>
        </section>
    )
}

export default ProfileSection;