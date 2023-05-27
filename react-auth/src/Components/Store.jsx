import React from 'react';
import { useNavigate } from 'react-router-dom';

const Store = () => {
  const router = useNavigate()
  return (
    <div>
      <h1>Store</h1>
      <button onClick={()=> router('/login')} >Logout</button>
    </div>
  )
}

export default Store