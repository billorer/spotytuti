import React, { useContext, useEffect, useState } from 'react';
import ProfileContext from '../../context/profile/profileContext';

const Profile = () => {
  const profileContext = useContext(ProfileContext);

  const profile = {...profileContext.profileData};

  useEffect(() => {
    profileContext.profile();
    // eslint-disable-next-line
  }, []);

  return (
    profileContext.profileData && (
      <div className="row valign-wrapper">
        <div className="col s3">
          <img
            src={profile.images[0].url}
            alt={profile.display_name}
            className="circle responsive-img"
          />
        </div>
        <div className="col s9">
          <h1>{profile.display_name}</h1>
          <p>
            username:&nbsp;
            <a target="_blank" rel="noopener noreferrer" href={profile.uri}>
              {profile.id}
            </a>
          </p>
          <p>followers: {profile.followers.total}</p>
          {profile.email && <p>email: {profile.email}</p>}
          {profile.country && <p>country: {profile.country}</p>}
          {profile.product && <p>product: {profile.product}</p>}
        </div>
      </div>
    )
  );
};

export default Profile;
