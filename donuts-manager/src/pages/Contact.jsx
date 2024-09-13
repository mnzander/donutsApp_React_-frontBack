import ContactComponent from '@/components/ContactComponent/ContactComponent'
import FooterComponent from '@/components/FooterComponent'
import HeaderComponent from '@/components/HeaderComponent'
import React from 'react'

export default function Contact() {
  return (
    <div>
      <HeaderComponent />
      <div className='contact-page'>
        <h1 className='contact-title'>Sobre nosotros:</h1>
        <ContactComponent />
      </div>
      <FooterComponent />
    </div>
  )
}
