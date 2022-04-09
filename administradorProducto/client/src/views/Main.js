import React, { useEffect, useState} from 'react';
import { simpleAxiosGet, simpleAxiosPost, simpleAxiosDelete } from '../accions/simpleAxios';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom"


const Main = (props) => {
    const [products, setProducts] = useState()
    const history = useHistory();
 



    async function getData(url){
        const response = await simpleAxiosGet(url)       
        setProducts(response.products)
        console.log(response.products)
    }

    

    const handleHistory = (e) =>{
        const url = "http://localhost:8000/api/product/" + e.target.value
        props.setId(e.target.value)
        console.log(url)
        history.push(`/product/${e.target.value}`)
    }
    const deleteProduct = async (event) =>{
        const url = "http://localhost:8000/api/product/delete/" + event.target.value
        console.log(url)
        const response = await simpleAxiosDelete(url)
    }


    useEffect(() => {
        const url =  'http://localhost:8000/api/product/'
        getData(url);
    },[products] );
    
    

    return (
        <div className="cont-main">
             <ul className = "ul-main">
                {                    
                        products?.map((producto, index) =>  
                        <li key={index} className="li-main" > 
                            <div className="nombre-producto">
                                {producto.tittle}                           
                            </div>
                            <button value={producto._id} onClick={(e) => handleHistory(e)}> Ver Detalle </button> 
                            <button  onClick={(e) => deleteProduct(e)} value={producto._id}  > Eliminar </button>  
                       </li> )               
                }
             </ul>
        </div>
    );
}

export default Main;
