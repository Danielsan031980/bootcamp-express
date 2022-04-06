import axios from 'axios';


export async function simpleAxiosGet (url) {
    
    try{
        
        const apiResponse = axios.get(url).then(response=>response.data);
        return apiResponse

    }catch(error){
     
        return {error:"se ha producido un error:" + error}
    }

}

export async function simpleAxiosPost (url,body) {    
    try{
        
        const apiResponse = axios.post(url, body).then(response=>response.data);
        return apiResponse

    }catch(error){
       
        return {error:"se ha producido un error:" + error}
    }

}
