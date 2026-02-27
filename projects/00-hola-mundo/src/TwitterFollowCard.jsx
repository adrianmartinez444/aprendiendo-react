export function TwitterFollowCard ({formatUsername, userName, name, isFollowing}) {
    console.log(isFollowing)
    
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" alt="avatar" src={`https://unavatar.io/${userName}`} />
            <div>
                <strong>{name}</strong>
                <br />
                <span className="tw-followCard-infoUserName">{formatUsername(userName)}</span>
            </div>
            </header>

            <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
            </aside>
        </article> 
    )
}