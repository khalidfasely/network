import React, { useState } from 'react';

const ProfileHeader = ({ linkUser, userProfile, follow, uname }) => {
    const [button, setButton] = useState(false);
    const followF = () => {
        console.log('before');
        setButton(true);
        console.log('after');
        setTimeout(() => {
            setButton(false);
        }, 500);
    }
    return(
        <div>
            <div>{linkUser} - {userProfile && userProfile}</div>
            {userProfile && <div>{userProfile}</div>}
            {follow && <div>Following: {follow.following} | Followers: {follow.followers}</div>}
            {
                uname &&
                (
                    uname === (userProfile && userProfile) ?
                    <p>Nothing</p> :
                    (
                        (follow && follow.follow_up) !== 'None' ?
                        <button onClick={followF} disabled={button}>Unfollow</button> :
                        <button onClick={followF} disabled={button}>Follow</button>
                    )
                )
            }
        </div>
    );
};

//(follow && follow.follow_up) !== 'None' ?

export default ProfileHeader;