import React from 'react'
import './style.css'

export default function ChooseBoutique() {
  return (
    <div className='choose-container'>
        <div className="choose-content">
        <h2 className='choose-title'>SCEGLI LA TUA BOUTIQUE</h2>
        <p className='choose-descr'>SCEGLI TRA UNA VASTA GAMMA DI ABBIGLIAMENTI A MILANO</p>
        <button className='choose-login-btn'
         onClick={() => (window.location.href = '/login')}
         >Log In &rarr;</button>
        </div>
    </div>
  )
}
