import React, { useReducer } from 'react';
import axios from 'axios';
import profileReducer from './profileReducer';
import ProfileContext from './profileContext';
import { SEARCH_SUCCESS } from '../types';

const ProfileState = props => {
    const initialState = {
        items: null
    };

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const profile = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.get('/api/me', {}, config);
            console.log(res);
            // dispatch({ type: SEARCH_SUCCESS, payload: res.data });
        } catch (error) {
            // dispatch({ type: SEARCH_FAIL });
        }
    };

    return (
        <ProfileContext.Provider
            value={{
                items: state.items,
                profile
            }}
        >
            {props.children}
        </ProfileContext.Provider>
    );
};

export default ProfileState;
