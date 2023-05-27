import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const router = useNavigate();
    const [displayStore, setDisplayStore] = useState(false);
    useEffect(() => {
        const userDaata = JSON.parse(localStorage.getItem("user"));
        console.log(userDaata, "checek heree")
        if (userDaata?.email) {
            setDisplayStore(true)
        }
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '62px' }}>
            <div onClick={() => router('/login')} style={{ cursor: 'pointer' }}>Login</div>
            <div onClick={() => router('/')} style={{ cursor: 'pointer' }}>Register</div>
            {displayStore && <div onClick={() => router('/store')} style={{ cursor: 'pointer' }}>Store</div>}
        </div>
    )
}

export default Navbar