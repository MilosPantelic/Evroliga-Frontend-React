import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../css/FirstPage.css'



function AddCities(){

  const navigate = useNavigate();

  const [prikazTabele, setPrikazTabele] = useState();
  const [isLoading, setLoading] = useState(true);
  const [imeGrada, setImeGrada] = useState('');

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

  const handleChange = (event) => {
    if(event.target.name == "cityName")
    {
        setImeGrada(event.target.value);
    }

  };



  const Submit = () =>{
    const parametri = {
        imeGrada    : imeGrada,
    }


    fetch('http://localhost:5023/addcity/' + imeGrada ,{
        method : 'POST'
    }).then(res => {
        console.log(res);
        dataAxios();
    });

};


  if(isLoading)
  {
  }
  
  else{
    if(Object.keys(prikazTabele).length<2){
      alert("Unesite 2 grad");
      return(
        <>
        <div>
            <div>Broj unetih gradova: {2 - Object.keys(prikazTabele).length}</div>
            <label></label>
            <input type="text" name='cityName' onChange={handleChange} ></input>
            <button onClick={Submit}>Submit</button>
        </div>
        </>
      );
    }
    else{
        navigate("/");
  }}
}

export default AddCities;
