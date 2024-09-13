import React, { useState } from 'react'
import Link from "next/link";

export default function DonutListHeaderComponent({ countFav, carrito }) {

  const [cartDetails, setCartDetails] = useState(false);

  const cartDetailsHandler = () => {
    setCartDetails(!cartDetails);
  }
  
  return (
    <>
    <div className="header">    
      <button className="button-logo">
        <Link href="/"><img className="logo" src="donuts.png"></img></Link> 
      </button>
      <div className="links">
        <Link className="link" href="/DonutsList" >Productos</Link>
        <Link className="link" href="/CreateDonut">Crea tu Donut</Link>
        <Link className="link" href="/Contact">Sobre nosotros</Link>
      </div>
      <div className="carrito">
        <button onClick={cartDetailsHandler} className='carrito-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
          </svg>
        </button>
        <button className='contador-favs'>
          {countFav}
        </button>
        {
          cartDetails ?
          <div className='detalle-carrito'>
            <h3 className='detalle-carrito-title'>Carrito de favoritos</h3>
            <ul>{carrito.map(item => 
              <li>{item}</li>)}</ul>
          </div>
          : null
        }
      </div>
    </div>
    <div className="choco-imgs">
      <img className="chocolate" src="/chocolate.webp" alt="Chocolate image" />
      <img className="chocolate-reverse" src="/chocolate.webp" alt="Chocolate image2" />
      <img className="chocolate" src="/chocolate.webp" alt="Chocolate image" />
      <img className="chocolate-reverse" src="/chocolate.webp" alt="Chocolate image2" />
      <img className="chocolate" src="/chocolate.webp" alt="Chocolate image2" />
    </div>
    </>
  )
}
