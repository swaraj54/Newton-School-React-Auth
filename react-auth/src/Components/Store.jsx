import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const router = useNavigate()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData, "userData here");
    if (!userData) {
      router('/login')
    }
  }, [])

  return (
    <div>
      <h1>Store</h1>
      <button onClick={() => router('/login')} >Logout</button>
    </div>
  )
}

export default Store