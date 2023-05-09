import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../css/AllPlayers.css'

function AllPlayers(){

    const [prikazTabeleIgraca, setPrikazTabeleIgraca] = useState();
    const [isLoading, setLoading] = useState(true);

    const dataAxios = () => {
        axios.get('http://localhost:5023/listallplayers').then(res => {
         console.log(res.data);  
         setPrikazTabeleIgraca(res.data); 
         setLoading(false);
       });
     }

    useEffect(() => {
        dataAxios();
    },[]);

    var Pozicija = (prop) => {
       switch(prop){
        case 1:
            return("PlejMejker");
 
        case 2:
            return("Levi Bek suter (2)");

        case 3:
            return("Desni bek suter (3)");
         
        case 4:
            return("Krilo");

        case 5:
            return("Centar");
  

        }
    }


   
    if(isLoading)
    {}
    else
        return(
            prikazTabeleIgraca.map(element => {
                
                return(
                    <>
                        <h1>{element.firstName} {element.lastName}</h1>
                        <h2>Godine: {element.age}</h2>
                        <h2>Visina: {element.height}</h2>
                        <h2>Pozicija: {Pozicija(element.position)}</h2>
                        <h2>Broj na dresu: {element.jersey}</h2>
                        <h2>Tim: {element.playForTeam}</h2>
                        
                    </>
                )
            })
        );


}

export default AllPlayers;