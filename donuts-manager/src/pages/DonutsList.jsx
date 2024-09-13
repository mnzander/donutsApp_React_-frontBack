// src/pages/DonutsList.jsx
import React, { useState } from 'react';
import DonutsListComponent from '@/components/DonutsListComponent/DonutsListComponent';
import FooterComponent from '@/components/FooterComponent';
import DonutListHeaderComponent from '@/components/DonutsListComponent/DonutListHeaderComponent/DonutListHeaderComponent';

export default function DonutsList() {

  const [countFav, setCountFav] = useState(0);
  const [carrito, setCarrito] = useState([])

  const favoriteCounter = (newCount) => {
    setCountFav(newCount);
  };

  const carritoHandler = (newCarrito) => {
    setCarrito(newCarrito)
  }

  return (
    <div>
      <DonutListHeaderComponent countFav={countFav} carrito={carrito}/>
      <div>
        <h1 className='lista-title'>Lista de Donuts</h1>
        <DonutsListComponent favoriteCounter={favoriteCounter} carritoHandler={carritoHandler}/>
      </div>
      <FooterComponent />
    </div>
  );
}