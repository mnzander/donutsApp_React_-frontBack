import React from 'react'

export default function ContactComponent() {
  return (
    <div className='contact-comp'>
      <div>
        <span className='contact-each'>Nombre de la pasteleria:</span>
        <span className='contact-info'>Bimbo Donuts Iberia</span>    
      </div>
      <div>
        <span className='contact-each'>Marca:</span>
        <span className='contact-info'>Donuts</span>
      </div>
      <div>
        <span className='contact-each'>Direccion: </span>
        <span className='contact-info'>C/Josep Pla 2, edificio B2</span>
      </div>
      <div>
        <span className='contact-each'>Ciudad: </span>
        <span className='contact-info'>Barcelona, España</span>
      </div>
    </div>
  )
}
