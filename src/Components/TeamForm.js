import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/TeamForm.css'
import { useNavigate } from 'react-router-dom';


function TeamForm(props){
    

    const navigate = useNavigate();

    const [imetima, setImeTima] = useState('');
    const [vlasnik, setVlasnik] = useState('');
    const [brojpobeda, setBrojPobeda] = useState(0);
    const [ulica, setUlica] = useState('');
    const [brojgradjevine, setBrojGradjevine] = useState('');


    const handleChange = (event) => {
        if(event.target.name == "TeamName")
        {
            setImeTima(event.target.value);
        }

        if(event.target.name == "Owner")
        {
            setVlasnik(event.target.value);
        }

        if(event.target.name == "NumberOfWins")
        {
            setBrojPobeda(event.target.value);
        }

        if(event.target.name == "Street")
        {
            setUlica(event.target.value);
        }

        if(event.target.name == "BuldingNumber")
        {
            setBrojGradjevine(event.target.value);
        }



      };

    const Submit = () =>{
        const parametri = {
            imetima : imetima,
            vlasnik : vlasnik,
            brojpobeda : brojpobeda,
            ulica : ulica,
            brojgradjevine: brojgradjevine,
            
        }

        fetch('http://localhost:5023/addteam/' + imetima + "/" + vlasnik + "/" + brojpobeda + "/" + ulica + "/" + brojgradjevine ,{
            method : 'POST'
        }).then(res => {
            console.log(res);
            props.refresh();
            props.pushed();
        });

    };
    useEffect(() => {
        
    },[]);

    console.log("Dodat tim");
    return(
        <div className='form'>
            <label className='formalabela'>Team Name</label>
            <input type="text" className='formainput' id="TeamName" name="TeamName" placeholder='Type' onChange={handleChange} value={props.teamName}/>
            <label className='formalabela'>Owner</label>
            <input type="text" className='formainput' id="Owner" name="Owner" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Number of Wins</label>
            <input type="text" className='formainput' id="NumberOfWins" name="NumberOfWins" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Street </label>
            <input type="text" className='formainput' id="Street" name="Street" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>BuldingNumber</label>
            <input type="text" className='formainput' id="BuldingNumber" name="BuldingNumber" placeholder='Type' onChange={handleChange}/>
            <br/>

            <button onClick={Submit} class='sada'>Create Team</button>
        </div>
    )

}

export default TeamForm;