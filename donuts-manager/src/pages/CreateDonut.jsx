import CreateDonutComponent from '@/components/CreateDonutComponent/CreateDonutComponent'
import FooterComponent from '@/components/FooterComponent'
import HeaderComponent from '@/components/HeaderComponent'
import React from 'react'

export default function CreateDonut() {
  return (
    <div>
      <HeaderComponent />
      <div className='create-container'>
        <h1 className='create-title'>Crea tu Donut</h1>
        <CreateDonutComponent />
      </div>
      <FooterComponent />
    </div>
  )
}
