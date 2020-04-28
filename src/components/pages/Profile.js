import React, { useContext, useEffect } from 'react';
import ProfileContext from '../../context/profile/profileContext';

const Profile = () => {
    const profileContext = useContext(ProfileContext);

    useEffect(() => {
        profileContext.profile();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1>profile of</h1>
            <p>display name: </p>
            <p>image</p>
            <p>email: </p>
            <p>followers: </p>
        </div>
    );
};

export default Profile;
