import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccountContext from './Features/AccountContext';
import { useEffect, useState } from 'react';
import ProfilePage from './Components/ProfilePage';
import LoginSignupPage from './Components/LoginSignupPage';

const serverURL = process.env.REACT_APP_SERVER_URL

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user_id, setUserId] = useState(null)
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetch(`${serverURL}/users/session`, {
      method: 'POST',
      mode: 'cors',
      headers: {
          "Content-Type": "application/json",
      },
      credentials: 'include'
  })
      .then(res => res.json())
      .then(body => {
          if (body.user_id) {
              setLoggedIn(true)
              setUserId(body.user_id)
              setUsername(body.username)
          } else {
              console.log('Login failed')
          }
      })
  }, [])

  return (
    <AccountContext.Provider value={{
      loggedIn, 
      setLoggedIn,
      user_id,
      setUserId,
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
