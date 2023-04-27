import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountContext from './Features/AccountContext';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const [username, setUsername] = useState('')


  return (
    <AccountContext.Provider value={{
      loggedIn, 
      setLoggedIn,
      username,
      setUsername
    }}>
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path='/' element={
            <h1>Homepage</h1>
          } />
          
          <Route path='/login' element={
            <h1>Log in form</h1>
          } />
          
        </Routes>
      </ BrowserRouter>
    </ AccountContext.Provider>

  );
}

export default App;
