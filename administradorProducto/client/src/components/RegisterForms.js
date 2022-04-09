import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { simpleAxiosGet, simpleAxiosPost, simpleAxiosUpdate } from '../accions/simpleAxios';


const RegisterForms = (props) => {
    const [register, setRegister] = useState("")

    const { tittleName, priceValue, descriptionText, _id, edit} = props 

    async function connectData(valor) {

        if(edit){
            const responseb = await simpleAxiosUpdate('http://localhost:8000/api/product/update/' + _id ,valor)
            console.log(responseb)
        }else{
            const responsea = await simpleAxiosPost('http://localhost:8000/api/product/create',valor)
            console.log(responsea)
        }


    }


    return (
        <div className="class-registro">
            <Formik          
            initialValues={{
                tittle:tittleName,
                price:priceValue,
                description:descriptionText,    

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
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                //onSubmitProp(values)
                const timeOut = setTimeout(()=>{
                    resetForm()
                    connectData(values)
                    setRegister(values)   
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
                                        <div className="formulario">
                                            <div className="datos">
                                                <div>
                                                    <label htmlFor='tittle'>Titulo</label>
                                                    <Field onChange={handleChange} onBlur={handleBlur}  id="tittle" type="text" placeholder={tittleName} name="tittle" ></Field>
                                                </div>                                   
                                                <div>
                                                     <ErrorMessage name="tittle">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage> 
                                                </div>
                                            </div>

                                            <div className="datos">
                                                <div>
                                                    <label htmlFor='price'>precio</label>
                                                    <Field onChange={handleChange} onBlur={handleBlur} id="price" type="number" placeholder={priceValue} name="price"></Field>
                                                </div>
                                                <div>
                                                    <ErrorMessage name="price">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>
                                                </div>
                                            </div>

                                            <div className="datos">
                                                <div>
                                                    <label htmlFor='description'>Description</label>
                                                    <Field onChange={handleChange} onBlur={handleBlur} id="description" type="text" placeholder={descriptionText} name="description"></Field>
                                                </div>
                                                <div>
                                                <ErrorMessage name="description">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage> 
                                                </div>
                                            </div>
                                        </div>

                                        {/* {errors.firstName && touched.firstName && <p>{errors.firstName}</p>} */}
                                        <button type="submit" disabled={Object.values(errors).length>0} > Registrar </button> 
                                    </Form>    
                            </div>
                        )


                    }}

            </Formik>
        </div>
    );
}

export default RegisterForms;
