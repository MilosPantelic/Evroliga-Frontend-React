import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/TeamForm.css'
import { useNavigate } from 'react-router-dom';
import EditTeamForm from './EditTeamForm';
import TableTeams from './TableTeam';
import { isCompositeComponentWithType } from 'react-dom/test-utils';


function EditTeam(props){
  
    console.log("sadasnji pros: ");
    console.log(props);

    const navigate = useNavigate();
    const [id, setTeamId] = useState();
    const [imetima, setImeTima] = useState('');
    const [vlasnik, setVlasnik] = useState('');
    const [brojpobeda, setBrojPobeda] = useState(0);
    const [ulica, setUlica] = useState('');
    const [brojgradjevine, setBrojGradjevine] = useState('');

    useEffect(() => {
        setTeamId(props.podaci.id);
        setImeTima(props.podaci.teamName);
        setVlasnik(props.podaci.owner);
        setBrojPobeda(props.podaci.numberOfWins);
        setUlica(props.podaci.street);
        setBrojGradjevine(props.podaci.buildingNumber);
      },[props]);
    

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

        fetch('http://localhost:5023/editteam/'+ props.podaci.id +"/" + imetima + "/" + vlasnik + "/" + brojpobeda + "/" + ulica + "/" + brojgradjevine ,{
            method : 'PUT'
        }).then(res => {
            props.refresh();
            props.eddited();

        });
    };



    return(
        <div className='form'>
            <label className='formalabela'>Team Name</label>
            <input type="text" className='formainput' id="TeamName" name="TeamName" placeholder='Type' onChange={handleChange} value={imetima} />
            <label className='formalabela'>Owner</label>
            <input type="text" className='formainput' id="Owner" name="Owner" placeholder='Type' onChange={handleChange} value={vlasnik}/>
            <label className='formalabela'>Number of Wins</label>
            <input type="text" className='formainput' id="NumberOfWins" name="NumberOfWins" placeholder='Type' onChange={handleChange} value={brojpobeda}/>
            <label className='formalabela'>Street </label>
            <input type="text" className='formainput' id="Street" name="Street" placeholder='Type' onChange={handleChange} value={ulica}/>
            <label className='formalabela'>BuldingNumber</label>
            <input type="text" className='formainput' id="BuldingNumber" name="BuldingNumber" placeholder='Type' onChange={handleChange} value={brojgradjevine}/>
            <br/>

            <button onClick={Submit} >Edit</button>
        </div>
    )

}

export default EditTeam;