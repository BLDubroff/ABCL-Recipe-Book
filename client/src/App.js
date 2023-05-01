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
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <ServerContext.Provider>
      <AccountContext.Provider
        value={{
          loggedIn,
          setLoggedIn,
          username,
          setUsername,
        }}
      >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<LoginSignupPage />} />

            <Route path="/profile" element={<ProfilePage />} />

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
