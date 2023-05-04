import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../css/FirstPage.css'


function FirstPages(){

  const navigate = useNavigate();

  const [prikazTabele, setPrikazTabele] = useState();
  const [isLoading, setLoading] = useState(true);
  const [isShown, setIsShown] = useState(false);
  
  const dataAxios = () => {
     axios.get('http://localhost:5023/listteam').then(res => {
      setPrikazTabele(res.data);
      setLoading(false);
      console.log(res.data);
    });
  }
  useEffect(() => {
    dataAxios();
  },[]);




  if(isLoading)
  {}
  
  else
    return(
        <div className='navbuttons'>
            <button onClick={() => {navigate("/teams")}}>Team</button>
            <button>Player</button>
            <button>State</button>
        </div>
    );
}

export default FirstPages;
