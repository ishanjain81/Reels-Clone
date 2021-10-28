import React,{useContext,useEffect,useState} from 'react';
import { AuthContext } from '../Context/AuthContext';

function Feed() {
    const {user,logout} = useContext(AuthContext);
    return (
        <div>
            <h1>Welcome to Feed</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Feed
