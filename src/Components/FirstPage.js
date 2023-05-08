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
  
  const dataAxios = () => {
     axios.get('http://localhost:5023/listcity').then(res => {
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
            {console.log(Object.keys(prikazTabele).length)}
            <button onClick={() => {navigate("/teams")}}>Team</button>
            <button onClick={() => {navigate("/allplayers")}}>Player</button>
            <button>State</button>
        </div>
    );
}

export default FirstPages;
