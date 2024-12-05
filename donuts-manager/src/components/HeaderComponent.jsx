import React, { useState } from 'react'
import Link from "next/link";

export default function HeaderComponent() {
  
  return (
    <>
    <div className="header">    
      <button className="button-logo">
        <Link href="/"><img className="logo" src="donuts.png"></img></Link> 
      </button>
      <div className="links">
        <Link className="link" href="/DonutsList" >Productos</Link>
        <Link className="link" href="/CreateDonut">Crear</Link>
        <Link className="link" href="/Contact">Contacto</Link>
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
