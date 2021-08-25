import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startFollow, startUnfollow } from '../actions/posts';
import followApi from '../fetching/follow';
import unfollowApi from '../fetching/unfollow';

const ProfileHeader = ({ linkUser, userProfile, follow, uname, startFollow, startUnfollow }) => {
    const [button, setButton] = useState(false);
    const followF = () => {
        setButton(true);
        startFollow(linkUser);
        setTimeout(() => {
            setButton(false);
        }, 250);
    }
    const unfollowF = () => {
        setButton(true);
        startUnfollow(linkUser);
        setTimeout(() => {
            setButton(false);
        }, 250);
    }
    return(
        <div className='content-container_body profile_header'>
            <h2 className='user_profile'>{userProfile && userProfile}</h2>
            {follow && <div className='follow'>Following: <b>{follow.following}</b> | Followers: <b>{follow.followers}</b></div>}
            {
                uname &&
                (
                    uname !== (userProfile && userProfile) &&
                    (
                        (follow && follow.follow_up) === 'None' ?
                        <button className='follow_button' onClick={followF} disabled={button}>Follow</button> :
                        <button className='unfollow_button' onClick={unfollowF} disabled={button}>Unfollow</button>
                    )
                )
            }
        </div>
    );
};
//<div>
//    <h1>{linkUser} - {userProfile && userProfile}</h1>
//    {userProfile && <div>{userProfile}</div>}
//    {follow && <div>Following: {follow.following} | Followers: {follow.followers}</div>}
//    {
//        uname &&
//        (
//            uname === (userProfile && userProfile) ?
//            <p>Nothing</p> :
//            (
//                (follow && follow.follow_up) === 'None' ?
//                <button onClick={followF} disabled={button}>Follow</button> :
//                <button onClick={unfollowF} disabled={button}>Unfollow</button>
//            )
//        )
//    }
//</div>
const mapDispatchToProps = (dispatch) => ({
    startFollow: (linkUser) => dispatch(startFollow(linkUser)),
    startUnfollow: (linkUser) => dispatch(startUnfollow(linkUser))
});

export default connect(undefined, mapDispatchToProps)(ProfileHeader);