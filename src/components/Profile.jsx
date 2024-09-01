import React, { useEffect,useState } from 'react'
import { onAuthStateChange } from '../firebase/auth';

function Profile() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChange((currentUser) => {
            if (currentUser) {
                setUser({
                    name: currentUser.displayName ,
                    email: currentUser.email,
                    password: ""
                });
            }
            else {
                setUser({
                    name: "",
                    email: "",
                    password: ""
                });
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
}

export default Profile