import React, { useEffect} from 'react';
import { simpleAxiosGet, simpleAxiosPost } from '../accions/simpleAxios';

const Viewproducts = () => {

    async function getData(){
        const response = await simpleAxiosPost('http://localhost:8000/api/product/create',{tittle: "sofa", price: 140000, description:"sofa de sala"})
        console.log(response)
    }

    useEffect(() => {
        getData();
    }, []);
    

    return (
        <div>
            
        </div>
    );
}

export default Viewproducts;
