import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { simpleAxiosGet, simpleAxiosPost } from '../accions/simpleAxios';





const RegisterForms = (props) => {
    const [register, setRegister] = useState("")

    const {onSubmitProp, tittleName, priceValue, descriptionText} = props 

    async function connectData(valor) {
        console.log(valor)
        const response = await simpleAxiosPost('http://localhost:8000/api/product/create',valor)
        console.log(response)
    }

    const write = (value) => {
        // console.log(value.target.value)
        setRegister(value.target.value)
    }

    return (
        <div>
            <Formik          
            initialValues={{
                tittle:"",
                price:"",
                description:"",    

            }}
            validationSchema={ Yup.object().shape({
                tittle: Yup.string()
                .min(3,"Nomre de Producto muy corto")
                .max(10,"Nombre de Producto muy Largo")
                .required("Por favor ingresa un producto"),
                price: Yup.number()
                .min(50000,"Costo de producto muy bajo")
                .max(1000000,"Costo de Producto muy alto")
                .required("Por favor ingresa un producto"),
                description: Yup.string()
                .min(5,"Descripción de Producto muy corta")
                .max(100,"Descripción de Producto muy Larga")
                .required("Por favor ingresa la descripción del producto")

            })}
            onSubmit={(values,{ setSubmitting })=>{
                //onSubmitProp(values)
                const timeOut = setTimeout(()=>{
                    
                    if(values){
                        connectData(values)
                        setRegister(values)   
                    }

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
                                <h2>Formulario de Registro</h2>
                                    <Form onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor='tittle'>Titulo</label>
                                            <Field onChange={handleChange} onBlur={handleBlur}  id="tittle" type="text" placeholder="titulo" name="tittle" ></Field>
                                            <ErrorMessage name="tittle">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage> 

                                            <label htmlFor='price'>precio</label>
                                            <Field id="price" type="number" placeholder="titulo" name="price"></Field>
                                            <ErrorMessage name="price">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>

                                            <label htmlFor='description'>Description</label>
                                            <Field id="description" type="text" placeholder="titulo" name="description"></Field>
                                            <ErrorMessage name="description">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage> 
                                        </div>

                                        {/* {errors.firstName && touched.firstName && <p>{errors.firstName}</p>} */}
                                        <button type="submit" disabled={Object.values(errors).length>0} > Registrarse </button> 
                                    </Form>    
                            </div>
                        )


                    }}

            </Formik>
        </div>
    );
}

export default RegisterForms;
