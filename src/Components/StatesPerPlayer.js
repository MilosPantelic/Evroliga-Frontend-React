import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import PlayerForm from './PlayerForm';
import '../css/TablePlayerPerTeam.css'
import StateForm from './StateForm';



function StatesPerPlayer(props){

    const [prikazTabele2, setPrikazTabele2] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const location = useLocation();
    let palyerid = location.state.id;
    let playerFirstName = location.state.firstName;
    let playerLastName = location.state.lastName;
   
    
  
    const dataAxios = () => {
        axios.get('http://localhost:5023/liststateplayer/' + palyerid).then(res => {
         setPrikazTabele2(res.data);
         setLoading(false);
         console.log(res.data);
       });
     }

     useEffect(() => {
       dataAxios();
     },[]);

    
     const Deletee =(prosledjeno) => () => {
        console.log(prosledjeno);
        axios.delete('http://localhost:5023/delteteam/' + prosledjeno). then(res =>{
            dataAxios();   
            console.log("obrisano!");
     })};


    return (
        <>
        <div className='perant_tppt'>
            <div className='tppt'>
                <h1>{playerFirstName} {playerLastName}</h1>
            { 
                prikazTabele2.map(element => {
                return(
                <>
                    <h2>Utakmica: {element.match}</h2>
                    <h3>Poeni: {element.score}</h3>
                    <h3>Asistencije: {element.asissitance}</h3>
                    <h3>Sutevi: {element.shoot}</h3>
                    <h3></h3>
                    

                    <button onClick={Deletee(element.id)}>Delete Player</button>

                    <br/>
                    <br/>
                </>
                )
                })
            }
                    

            </div>
            <div className='tppt'>
                <div className='tppt2'>
                    <StateForm playerid={palyerid} refresh={dataAxios}>
                    </StateForm>
                
                    </div>
            </div>
        </div>
        </>
    )



}

export default StatesPerPlayer;