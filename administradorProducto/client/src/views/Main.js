import React, { useEffect, useState} from 'react';
import { simpleAxiosGet, simpleAxiosPost, simpleAxiosDelete } from '../accions/simpleAxios';
import {BrowserRouter as Router, useHistory} from "react-router-dom"


const Viewproduct = (props) => {
    const history = useHistory();
    const [product, setProduct] = useState()

    async function getData(){
        const url = "http://localhost:8000/api/product/" + props.id
        const response = await simpleAxiosGet(url)       
        console.log(response.product)
        setProduct(response.product)
    }

    const deleteProduct = async (event) =>{
        console.log(event.target.value)
        const url = "http://localhost:8000/api/product/delete/" + event.target.value
        console.log(url)
        const response = await simpleAxiosDelete(url) 
        history.push("/")

    }

    const editProduct = async (event) =>{
        
        props.setProducts(product)
        history.push("/edit")

    }

    useEffect(() => {
       getData() 
       
    }, []);

    return (
        <div>  
            <ul>
                <li>
                    {product? product.tittle: "error"}
                </li> 
                <li>
                    {product? product.price: "error"}
                </li> 
                <li>
                    {product? product.description: "error"}
                </li> 
            </ul>
            <button  onClick={(e) => deleteProduct(e)} value={product?._id} >Eliminar</button>
            <button  onClick={(e) => editProduct(e)} value={product?._id} >Modificar</button>
        </div>
    );
}

export default Viewproduct;
