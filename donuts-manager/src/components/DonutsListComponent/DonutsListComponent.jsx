import React, { useEffect, useState } from 'react'
import { getAllDonuts } from '@/api/apiFetch'
import Link from 'next/link';

export default function DonutsListComponent({ favoriteCounter, carritoHandler }) {

  const [donuts, setDonuts] = useState([]);
  const [donutId, setDonutId] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const getAllDonutsAux = async () => {
      const donutsAux = await getAllDonuts();
      setDonuts(donutsAux.data);
    }  
    getAllDonutsAux();
  }, [])

  const btnClicked = (nombre) => {
    let carritoAux = !carrito.includes(nombre) ? [...carrito, nombre] : carrito.filter(eachName => eachName !== nombre);
    console.log(carritoAux);
    setCarrito(carritoAux);
    carritoHandler(carritoAux);

    const updateDonuts = donuts.map(donut =>
      donut.nombre === nombre ? {...donut, favorite: !donut.favorite} : donut
    )
    setDonuts(updateDonuts);

    const counter = updateDonuts.filter(donut => donut.favorite).length;
    favoriteCounter(counter);
  }

  return (
    <div className='lista-donuts'>
      {
        donuts.map((donut, index) => {
          return <div key={index}>
              <span>
                <Link href={`/ProductDetail?id=${donut._id}`}>
                  <button className="enlace-detalle" onClick={() => {setDonutId(donut._id)}}>{donut.nombre}</button>
                </Link>
              </span>
              <button onClick={() => btnClicked(donut.nombre)} className='enlace-detalle'>
                { donut.favorite ?
                  <svg className="fav" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#dcff00">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                  </svg>
                :
                  <svg className="fav" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/>
                  </svg>
                }
              </button>
          </div>
        })
      }
    </div>
  )
}
