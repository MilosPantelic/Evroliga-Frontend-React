import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/TableTeam.css'
import { useNavigate } from 'react-router-dom';


function CounterPlayer(props){
    

    const navigate = useNavigate();

    const [brojac, setBrojac] = useState([]);


    const fetchData = () => {
        fetch("http://localhost:5023/memberofteams/" + props.imetima)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setBrojac(data)
          })
      }
    
      useEffect(() => {
        fetchData()
      }, [])
    
      return (
        <>
          {
              brojac.map(xx => (
                xx.counter
              ))
          }
       </>
      )

}

export default CounterPlayer;