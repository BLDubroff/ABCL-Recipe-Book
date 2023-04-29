import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountContext from './Features/AccountContext';
import { useState } from 'react';
import ProfilePage from './Components/ProfilePage';
import LoginSignupPage from './Components/LoginSignupPage';

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
            <LoginSignupPage />
          } />

          <Route path='/profile' element={
            <ProfilePage />
          } />
          
        </Routes>
      </ BrowserRouter>
    </ AccountContext.Provider>

  );
}

export default App;
