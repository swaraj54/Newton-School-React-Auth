

import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Store from './Components/Store'
import Navbar from './Components/Navbar';
import Loader from './Components/Loader';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/store' element={<Store />} />
        <Route exact path='/loader' element={<Loader />} />
      </Routes>
    </div>
  );
}

export default App;
