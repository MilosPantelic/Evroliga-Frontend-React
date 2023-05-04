import logo from './logo.svg';
import './css/App.css';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FirstPage from './Components/FirstPage';
import TableTeams from './Components/TableTeam';
import TablePlayerPerTeam from './Components/TablePlayerPerTeam';
import StatesPerPlayer from './Components/StatesPerPlayer';

function App() {


  const navigate = useNavigate();

  return (
    <>

      <header className='prviheader'>
          <button onClick={() => {navigate("/teams")}}>Team</button>
          <button>Player</button>
          <button>State</button>
        </header>

        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/teams" element={<TableTeams/>}/>
          <Route path="/players" element={<TablePlayerPerTeam/>}/>
          <Route path="/states" element={<StatesPerPlayer/>}/>
        </Routes>

    </>
   
  );
}


export default App;
