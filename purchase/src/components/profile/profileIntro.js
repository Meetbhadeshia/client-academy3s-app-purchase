function ProfileIntro(props) {
    return (
        <div className="profile-content-intro">
            <ul className="profile-intro">
                <li>
                    <div className="label">Name:</div>
                    <div className="intro-text">{props.name}</div>
                </li>
                <li>
                    <div className="label">Phone:</div>
                    <div className="intro-text">{props.phone}</div>
                </li>
                <li>
                    <div className="label">Email:</div>
                    <div className="intro-text">{props.email}</div>
                </li>
            </ul>
        </div>
    );
}

export default ProfileIntro;