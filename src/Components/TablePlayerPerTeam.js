import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import PlayerForm from './PlayerForm';
import '../css/TablePlayerPerTeam.css'
import { useNavigate } from "react-router-dom";



function TablePlayerPerTeam(props){
    const navigate = useNavigate();

    const [prikazTabele2, setPrikazTabele2] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const location = useLocation();
    let ime = location.state.nameOfTeam;

    
  
    const dataAxios = () => {
        axios.get('http://localhost:5023/listplayersperteam/' + ime).then(res => {
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
                <h1>{ime}</h1>
            { 
                prikazTabele2.map(element => {
                return(
                <>
                    <h2>Ime Igraca: {element.firstName}  {element.lastName}</h2> 
                    <h3>Pozicija: {element.position}</h3>
                    <h3>Broj na dresu: {element.jersey}</h3>
                    <button onClick={Deletee(element.id)}>Delete Player</button>
                    <button onClick={() => {navigate('/states',{
                  state : {
                    id: element.id,
                    firstName: element.firstName,
                    lastName: element.lastName}
                })}}>Show states of play</button>
                    <br/>
                    <br/>
                </>
                )
                })
            }
                    

            </div>
            <div className='tppt'>
                <div className='tppt2'>
                    <PlayerForm imetima={ime} refresh={dataAxios}>
                    </PlayerForm>
                
                    </div>
            </div>
        </div>
        </>
    )



}

export default TablePlayerPerTeam;