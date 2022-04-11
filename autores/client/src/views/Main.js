import React, { useEffect, useState} from 'react';
import { simpleAxiosGet, simpleAxiosDelete } from '../accions/simpleAxios';
import {BrowserRouter as Router, Switch, Route, Link, useHistory, useParams} from "react-router-dom"
import Buttonapi from '../components/Buttonapi';


const Main = (props) => {

    const history = useHistory();
    const [autors, setAutors] = useState()

    async function getData(url){
        const response = await simpleAxiosGet(url)      
        setAutors(response.api)
    }


    const modify = async (event) =>{
           const response = await simpleAxiosGet("http://localhost:8000/api/autor/" + event.target.value)  
            props.setLastautor(response.api)
            history.push("/autor/update/"  + event.target.value )
    }

    const deleteValue = async  (event) =>{
            await simpleAxiosDelete ("http://localhost:8000/api/autor/delete/" + event.target.value)
            getData(props.url);
            history.push("/")
    }

    useEffect(() => {    
        getData(props.url)
    },[] );

    return (    
        <div className="main-body">
            <ul>
                <li> <div className="columna-1">  <span className="columna-1-titulo">Nombre</span>   </div> <div className="columna-1" >   <span className="columna-1-titulo"  >Acciones</span>   </div>  </li>
                {                         
                    autors?.map((autor,index)=>   
                        <li key={index}> 
                            <div className="columna-1"   >{autor.autor} </div>
                            <div className="columna-1">
                                <button className="button-main" onClick={(e)=> modify(e) } value={autor._id} >Modificar</button>
                                <button className="button-main" onClick={(e)=> deleteValue(e) } value={autor._id} >Eliminar</button>
                            </div>
                        </li>
                        
                     )                
                }
            </ul>
        </div>
    );
}

export default Main;
