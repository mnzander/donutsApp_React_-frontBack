import { getDonutById, updateDonut } from '@/api/apiFetch';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { number, object, string } from 'yup'

export default function EditDonutsDetailComponent(props) {

  const { id } = props;
  const router = useRouter();

  const [donut, setDonut] = useState ({});
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const loadDonut = async () => {
      const donutAux = await getDonutById(id);
      setDonut(donutAux.data);
    }
    loadDonut();
  }, [])

  const validationSchemaYup = object({
    nombre: string()
      .required("El nombre es requerido")
      .min(4, "Debe tener 4 caracteres mínimo")
      .max(15, "Máximo 15 caracteres"),
    precio: number()
      .positive(),
    sabor: string()
      .min(4, "Debe tener 4 caracteres mínimo")
      .max(20, "Máximo 20 caracteres"),
  });

  const saveDonut = async (values) => {
    const updatedDonut = {};

    if (values.nombre !== donut.nombre) {
      updatedDonut.nombre = values.nombre;
    }
  
    if (values.precio != donut.precio) {
      updatedDonut.precio = values.precio;
    }
  
    if (values.sabor !== donut.sabor) {
      updatedDonut.sabor = values.sabor;
    }
  
    if (updatedDonut.precio >= 3.33 || !updatedDonut.precio) {
      await updateDonut(id, JSON.stringify(updatedDonut));
      router.push("/DonutsList");
    } else {
      setError(true);
      setErrorMsg("El precio minimo es de 3.33€")
    }
  };

  const handleBackToDetail = () => {
    router.push(`/DonutsList`)
  };

  return (
    <div>
      <h3 className='editor-title'>Editor de productos</h3>
      <div className = "edit-formik">
        <Formik initialValues={{
          nombre: donut.nombre,
          precio: donut.precio,
          sabor: donut.sabor
        }}
        onSubmit={(values) => saveDonut(values)}
        validationSchema={validationSchemaYup}
        >
          <Form>
            <div className='eachField'> 
              <span>Nombre: </span>
              <Field className="fields" name="nombre" type="text" placeholder="Nombre..." />
              <ErrorMessage name="nombre" component="div" />
            </div>
            <br/>
            <div className='eachField'>
              <span>Precio: </span>
              <Field className="fields" name="precio" type="number" placeholder="Precio..." />
              <ErrorMessage name="precio" component="div" />
            </div>
            <br/>
            <div className='eachField'>
              <span>Sabor: </span>
              <Field className="fields" name="sabor" type="text" placeholder="Sabor..." />
              <ErrorMessage name="sabor" component="div" />
            </div>
            <br/>
            <div className='editor-buttons'>
              <button className='editor-btn' type='submit'>Guardar cambios</button>
              <button className='editor-btn' onClick={handleBackToDetail}>Volver</button>
            </div>
          </Form>
        </Formik>
        <span className='error'>{error ? errorMsg : null}</span>
        <span className='warning'>*El precio de las Donuts personalizadas es de mínimo 3.33€</span>
      </div>
    </div>
  )
}
