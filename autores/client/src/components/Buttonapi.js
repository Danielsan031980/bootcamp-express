import React from 'react';
import { simpleAxiosGet, simpleAxiosPost, simpleAxiosDelete, simpleAxiosUpdate } from '../accions/simpleAxios';
import {BrowserRouter as Router, useHistory, useParams} from "react-router-dom"

const Buttonapi = (props) => {
    const { text, api, body, option } = props
    const history = useHistory();
 
    const action = async (event) =>{
    
       const url = "http://localhost:8000/api/" 

        let response;
        switch (option){
            case 1:
                console.log(api)
                response = await simpleAxiosDelete(url + "autor/delete/" + api)
                history.push("/")
                break;
            case 2:
                response = await simpleAxiosGet(url)  
                break;                
            case 3:
                response = await simpleAxiosPost(url,body)  
                break; 
            case 4:
                response = await simpleAxiosUpdate(url,body)  
                break;  
            case 5:
                
                history.push("/autor/update/" + api)
                break;     
        }


        
    }

    return (
        <div>
            <button  onClick={(e) => action(e)}  > {text} </button>
        </div>
    );
}

export default Buttonapi;

