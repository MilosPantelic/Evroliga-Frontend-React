import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/PlayerForm.css'
import { useNavigate } from 'react-router-dom';


function PlayerForm(props){
    

    const navigate = useNavigate();

    const [score, setScore] = useState(0);
    const [shoot, setShoot] = useState(0);
    const [assistance, setAssistance] = useState(0);
    const [match, setMatch] = useState('');


    const handleChange = (event) => {
        if(event.target.name == "Score")
        {
            setScore(event.target.value);
        }

        if(event.target.name == "Shoot")
        {
            setShoot(event.target.value);
        }

        if(event.target.name == "Assistance")
        {
            setAssistance(event.target.value);
        }
        
        if(event.target.name == "Match")
        {
            setMatch(event.target.value);
        }

      };

    const Submit = () =>{
        const parametri = {
            score : score,
            shoot : shoot,
            assistance : assistance,
            match : match,

        }

        fetch('http://localhost:5023/addstate/' + score + "/" + shoot + "/" + assistance + "/" + match + "/" + props.playerid,{
            method : 'POST'
        }).then(res => {
            console.log(res);
            props.refresh();
        });

    };
    useEffect(() => {
        
    },[]);

    console.log(props.imetima);
    return(
        <div className='form'>
            <label className='formalabela'>Score</label>
            <input type="text" className='formainput' id="Score" name="Score" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Shoot</label>
            <input type="text" className='formainput' id="Shoot" name="Shoot" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Assistance</label>
            <input type="text" className='formainput' id="Assistance" name="Assistance" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Match </label>
            <input type="text" className='formainput' id="Match" name="Match" placeholder='Type' onChange={handleChange}/>



            <button onClick={Submit}>Create Player</button>
        
        </div>
    )

}

export default PlayerForm;