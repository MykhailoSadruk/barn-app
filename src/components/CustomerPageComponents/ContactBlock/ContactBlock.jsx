import React from 'react'
import './style.css'
import fastIcon from '../../../assets/fastCircle.svg'
import phoneIcon from '../../../assets/callCircle.svg'


export default function ContactBlock() {
  return (
    <div className='contact-block-container'>
        <div className="contact-delivery-block">
            <img src={phoneIcon} alt="phone" className="delivery-block-icon" />
            <div className='delivery-txt-block'>
                <span className="delivery-block-title">WHATSAPP</span>
                <span className="delivery-block-subtitle">(+39) 351 546 9091</span>
            </div>
        </div>
        <div className="contact-delivery-block">
        <img src={fastIcon} alt="delivey-car" className="delivery-block-icon" />
            <div className='delivery-txt-block'>
                <span className="delivery-block-title">CONSEGNA</span>
                <span className="delivery-block-subtitle">€ 5,00(NO ORDINE MINIMO)</span>
            </div>
        </div>
    </div>
  )
}
