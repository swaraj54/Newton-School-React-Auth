import './App.css';

import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Store from './Components/Store'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/store' element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
