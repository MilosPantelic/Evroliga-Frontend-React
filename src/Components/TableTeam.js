import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../css/TableTeam.css'
import CounterPlayer from './CounterPlayer';
import EditTeamForm from './EditTeamForm';
import TeamForm from './TeamForm';


function TableTeams(){

  const navigate = useNavigate();

  const [prikazTabele, setPrikazTabele] = useState();
  
  const [isLoading, setLoading] = useState(true);
 
  
  
  const dataAxios = () => {
     axios.get('http://localhost:5023/listteam').then(res => {
      setPrikazTabele(res.data);
      setLoading(false);
      console.log(res.data);
      setshowNewTeamButton(true);
    });
  }

  useEffect(() => {
    dataAxios();
  },[]);


  
  const [openNewTeamForm, setOpenNewTeamForm] = useState(false)
  const [showNewTeamButton,setshowNewTeamButton] = useState(true)


  const NewTeam = () => {
    const onClick = () => {
      setOpenNewTeamForm(true);
      setopenEditTeamForm(false);
      setshowNewTeamButton(false);
    }
    return (
  
        <button onClick={onClick}  className='buton'>New Team</button>        

    )
  };

  const [openEditTeamForm, setopenEditTeamForm] = useState(false)

  const [niz, setNiz] = useState([]);

  const ShowForm = (props) =>{
    setNiz(props);
    setopenEditTeamForm(true);
    setOpenNewTeamForm(false);
    setshowNewTeamButton(false);
  };

  const Closebutton = () =>{
    
    const onClikck3 = () =>{
      setOpenNewTeamForm(false);
      setopenEditTeamForm(false);
      setshowNewTeamButton(true);
    }

    return(
      <button className='buton' onClick={onClikck3}>Close</button>
    )
  }

  
  const hiddeForm = () =>{
    if(openNewTeamForm == true){
      setOpenNewTeamForm(false);
    
      
    }
   
  };

  const  hiddenEditForm = () => {
    setopenEditTeamForm(false); 
  }

  const hiddenPlayerFrom = () =>{
    setOpenNewTeamForm(false);
  }


  const PressDeleteTeam =(prosledjeno) => () => {
    console.log(prosledjeno);
    axios.delete('http://localhost:5023/delteteam/' + prosledjeno). then(res =>{
        dataAxios();   
        console.log("obrisano!");
 })};


  if(isLoading)
  {}
  
  else
    return(
      <div>
      <div className='parent'>
          <div className='buttonAndForm'>
            <div className='buttons'>
              <div className='buton'>{ showNewTeamButton ? <NewTeam /> : <Closebutton />  }</div>
            </div>

          <div className='forms'>
            <div className='newplayerforma'>{ openNewTeamForm ? <TeamForm refresh={dataAxios} pushed={hiddenPlayerFrom} /> : null }</div>
            <div className='newplayerforma'>{ openEditTeamForm ? <EditTeamForm podaci={niz} refresh={dataAxios} eddited={hiddenEditForm}/> : null }</div>
          </div>
        </div>
      </div>  
      
        <div onClick={hiddeForm} className='showTable'> 
          { 
            prikazTabele.map(element => {
              return(
              <>
                <div className="container">
                <div className='teams'>
                  <h2>Ime kluba: <i>{element.teamName}</i></h2> 
                  <h3>Broj pobeda: {element.numberOfWins}</h3>
                  <h3>Broj clanova: <CounterPlayer imetima={element.teamName} ></CounterPlayer></h3>
                  <h4>Lokacija:<i> {element.street} {element.buildingNumber}</i> {element.nameCities}</h4>
                  <button onClick={() => {navigate('/players',{
                      state : {
                        nameOfTeam: element.teamName}
                    })}}>Show players</button>
                  <button onClick={() => ShowForm(element)}>Edit team</button>
                  <button onClick={PressDeleteTeam(element.id)}>Delete</button>
                </div>
                </div>
                
              </>
               )
              })
            }      
        </div>
      </div>
    );
}

export default TableTeams;
