import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { simpleAxiosGet, simpleAxiosPost, simpleAxiosUpdate } from '../accions/simpleAxios';
import {BrowserRouter as Router, useHistory, useParams} from "react-router-dom"


const RegisterForms = (props) => {
    const [register, setRegister] = useState()
    const history = useHistory();

    const { autor, _id, edit} = props 
    async function connectData(valor) {            
            if(edit){     
               console.log(valor)          
               console.log(_id)
               const responseb = await simpleAxiosUpdate('http://localhost:8000/api/autor/update/' + _id ,valor)
               console.log(responseb)
               
            }else{
               const responsea = await simpleAxiosPost('http://localhost:8000/api/autor/create',valor)
               
            }
            history.push("/")
    }
    const cancel = () => {
        history.push("/")
    }

    return (
        <div className="class-registro">
            <Formik          
            initialValues={{
                autor:autor, 
            }}
            validationSchema={ Yup.object().shape({
                autor: Yup.string()
                .min(3,"Nomre de Autor muy corto")
                .max(20,"Nombre de Autor muy Largo")
                .required("Por favor ingresa un Nombre"),

            })}
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                console.log(values)
                const timeOut = setTimeout(()=>{
                    resetForm()
                    connectData(values)
                    setSubmitting(false);
                }, 1000)
            }}
            >
                    {({errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    })=>{
                        return(
                            <div>
                                    <div className="main-form">
                                       
                                            {
                                                edit?<h3>Edita tu autor </h3>:<h3>Crea un nuevo autor </h3>
                                            }
                                        
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="formulario">
                                            <div className="datos">
                                                <div className="input-autor">
                                                    <label htmlFor='autor'>Autor</label>
                                                    <Field className="input-form" onChange={handleChange} onBlur={handleBlur}  id="autor" type="text" placeholder={autor} name="autor" ></Field>
                                                </div>                                   
                                                <div>
                                                     <ErrorMessage name="autor">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage> 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="form-button">
                                            <button type="submit" disabled={Object.values(errors).length>0} > Registrar </button> 
                                            <button type="reset" onClick={cancel} > Cancel </button> 
                                        </div>
                                    </Form>    
                            </div>
                        )
                    }}

            </Formik>
        </div>
    );
}

export default RegisterForms;
