import { createDonut } from '@/api/apiFetch';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { number, object, string } from 'yup';

export default function CreateDonutComponent() {

    // const [nombre, setNombre] = useState("");
    // const [precio, setPrecio] = useState(3.33);
    // const [sabor, setSabor] = useState("");

    // const nameHandler = (e) => {
    //     setNombre(e.target.value);
    // };

    // const precioHandler = (e) => {
    //     setPrecio(e.target.value);
    // };

    // const saborHandler = (e) => {
    //     setSabor(e.target.value);
    // };

    // const saveNewDonut = async () => {
    //     await createDonut(JSON.stringify({
    //         nombre,
    //         precio,
    //         sabor
    //     }));
    // }

    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const router = useRouter();

    const saveNewDonut = async (values) => {
        if (values.precio >= 3.33) {
            await createDonut(JSON.stringify({
                nombre: values.nombre,
                precio: values.precio,
                sabor: values.sabor
            }));
            setError(false);
            router.push("/DonutsList");
        } else {
            setError(true);
            setErrorMsg("El precio minimo es de 3.33€")
        }
    }

    const volverHandler = () => {
        router.push("/DonutsList");
    };

    const validationSchemaYup = object({
        nombre: string()
            .required("El nombre es requerido")
            .min(4, "Debe tener 4 caracteres mínimo")
            .max(15, "Máximo 15 caracteres"),
        precio: number()
            .required("El precio es requerido")
            .positive(),
        sabor: string()
            .required("El sabor es requerido")
            .min(4, "Debe tener 4 caracteres mínimo")
            .max(20, "Máximo 20 caracteres"),
      });

    return (
        <div className='create-formik'>
            <Formik initialValues={{
                nombre: "",
                precio: "",
                sabor: "",
            }}
            onSubmit={(values) => saveNewDonut(values)}
            validationSchema={validationSchemaYup}
            >
                <Form>
                    <div className='eachField'>
                        <span>Nombre: </span>
                        <Field className="fields" name="nombre" type="text" placeholder="Nombre del nuevo donut..."/>
                        <ErrorMessage name="nombre" component="div" />                     
                    </div>
                    <br />
                    <div className='eachField'>
                        <span>Precio: </span>
                        <Field className="fields" name="precio" type="number" placeholder="Escoge el precio..."/>
                        <ErrorMessage name="precio" component="div" />
                    </div>
                    <br />
                    <div className='eachField'>
                        <span>Sabor: </span>
                        <Field className="fields" name="sabor" type="text" placeholder="¿Qué sabor tiene...?" />
                        <ErrorMessage name="sabor" component="div" />
                    </div>
                    <div className="creator-buttons">
                        <button type="submit" className='creator-btn'>Guardar Donut</button>
                        <button className='creator-btn' onClick={volverHandler}>Volver</button>
                    </div>
                </Form>
            </Formik>
            <span className='error'>{error ? errorMsg : null}</span>
            <span className='warning'>*El precio de las Donuts personalizadas es de mínimo 3.33€</span>
        </div>
    )
}
