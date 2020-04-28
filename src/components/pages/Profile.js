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
            {profileContext.profileData ?
                <div>
                    <div className="row valign-wrapper">
                        <div className="col s3">
                            <img src={profileContext.profileData.images[0].url}
                                alt={profileContext.profileData.display_name} 
                                className="circle responsive-img"
                                />
                        </div>
                        <div className="col s9">
                            <h1>{profileContext.profileData.display_name}</h1>
                            <p>
                                username:&nbsp;
                                <a
                                    target='_blank'
                                    href={profileContext.profileData.uri}>{profileContext.profileData.id}
                                </a>
                            </p>
                            <p>followers: {profileContext.profileData.followers.total}</p>
                            {profileContext.profileData.email ?
                                <p>email: {profileContext.profileData.email}</p> : null
                            }
                            {profileContext.profileData.country ?
                                <p>country: {profileContext.profileData.country}</p> : null
                            }
                            {profileContext.profileData.product ?
                                <p>product: {profileContext.profileData.product}</p> : null
                            }
                        </div>
                    </div>
                   
                </div> : null
            }
        </div>
    );
};

export default Profile;
