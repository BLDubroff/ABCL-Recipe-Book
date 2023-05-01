import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountContext from "./Features/AccountContext";
import { useState } from "react";
import ProfilePage from "./Components/ProfilePage";
import LoginSignupPage from "./Components/LoginSignupPage";

import Home from "./Pages/Home";
import AddRecipe from "./Pages/recipes/addRecipe";
import EditRecipe from "./Pages/recipes/editRecipe";
import ShowRecipe from "./Pages/recipes/showRecipe";
import ServerContext from "./Features/ServerContext";

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

            <Route path="/addRecipe" element={<AddRecipe />} />

            <Route path="/editRecipe" element={<EditRecipe />} />

            <Route path="/recipes" element={< ShowRecipe/>} />
            
          </Routes>
        </BrowserRouter>
      </AccountContext.Provider>
    </ServerContext.Provider>
    
  );
}

export default App;
