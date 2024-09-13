import { deleteDonutById, getDonutById } from '@/api/apiFetch';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function DonutsDetailComponent(props) {

  const { id, showDetails, setIsEditing, setShowDetails } = props;
  const router = useRouter();
  const [donut, setDonut] = useState({});

  useEffect(() => {
    const loadDonut = async () => {
      const donutAux = await getDonutById(id);
      setDonut(donutAux.data);
    }
    loadDonut();
  }, [id])

  const deleteDonut = async() => {
    deleteDonutById(id);
    setShowDetails(!showDetails);
    router.push("/DonutsList");
  }

  return (
    <div className='detail-comp'>
      <h1 className='detail-title'>Detalle del producto</h1>
      <div className='detail-text'>
        <p>Nombre: <span>{donut.nombre}</span></p>
        <p>Precio: <span>{donut.precio}€</span></p>
        <p>Sabor: <span>{donut.sabor}</span></p>
      </div>
      <div className='detail-buttons'>
        <button className='detail-btn' onClick={() => {
          setShowDetails(true);
          setIsEditing(true);
        }}>
          Editar Donut
        </button>
        <button className='detail-btn' onClick={deleteDonut}>Borrar Donut</button>
      </div>
    </div>
  )
}
