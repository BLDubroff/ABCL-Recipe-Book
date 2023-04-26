import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <h1>Homepage</h1>
          } />
          
          
        </Routes>
    </ BrowserRouter>
    </>

  );
}

export default App;
