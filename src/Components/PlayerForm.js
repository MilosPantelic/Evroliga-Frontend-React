import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import '../css/PlayerForm.css'
import { useNavigate } from 'react-router-dom';


function PlayerForm(props){
    

    const navigate = useNavigate();

    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [godine, setGodine] = useState(0);
    const [visina, setVisina] = useState(0);
    const [dres, setDres] = useState(0);
    const [pozicija, setPozicija] = useState(0);

    const handleChange = (event) => {
        if(event.target.name == "FirstName")
        {
            setIme(event.target.value);
        }

        if(event.target.name == "LastName")
        {
            setPrezime(event.target.value);
        }

        if(event.target.name == "Age")
        {
            setGodine(event.target.value);
        }

        if(event.target.name == "Height")
        {
            setVisina(event.target.value);
        }

        if(event.target.name == "Jersey")
        {
            setDres(event.target.value);
        }

        if(event.target.name == "selekovanjepozicije")
        {
            setPozicija(event.target.value);
        }

      };

    const Submit = () =>{
        const parametri = {
            ime : ime,
            prezime : prezime,
            gidune : godine,
            visina : visina,
            dres : dres,
            pozicija : pozicija
        }

        fetch('http://localhost:5023/addplayer/' + ime + "/" + prezime + "/" + godine + "/" + visina + "/" + dres + "/" + pozicija + "/" + props.imetima,{
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
            <label className='formalabela'>First Name</label>
            <input type="text" className='formainput' id="FirstName" name="FirstName" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Last Name</label>
            <input type="text" className='formainput' id="LastName" name="LastName" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Age</label>
            <input type="text" className='formainput' id="Age" name="Age" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Height </label>
            <input type="text" className='formainput' id="Height" name="Height" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Jersey </label>
            <input type="text" className='formainput' id="Jersey" name="Jersey" placeholder='Type' onChange={handleChange}/>
            <label className='formalabela'>Position</label>
            <select name="selekovanjepozicije" className='formainput' onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <button onClick={Submit}>Create Player</button>
        
        </div>
    )

}

export default PlayerForm;