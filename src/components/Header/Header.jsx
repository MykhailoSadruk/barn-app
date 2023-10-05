import React from 'react'
import './style.css';



const logo =  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="47" viewBox="0 0 44 47" fill="none">
<path d="M0.459961 23.5055V46.5623L8.73044 38.2918V23.6397L6.32753 21.572L6.294 29.4737L6.27165 37.3642L4.5952 39.0406L2.91875 40.7283V23.215C2.91875 13.5921 2.9411 5.71283 2.97463 5.71283C2.99699 5.71283 7.27752 9.35632 12.4745 13.8157C17.6715 18.275 21.9632 21.9185 22.0191 21.9185C22.0638 21.9185 26.3555 18.275 31.5637 13.8157C36.7607 9.35632 41.0412 5.71283 41.0747 5.71283C41.1083 5.71283 41.1418 13.5921 41.1418 23.2261V40.7506L37.7889 37.3977V29.4961C37.7889 25.1373 37.7665 21.5832 37.733 21.5832C37.6995 21.5832 37.1407 22.0414 36.5036 22.6003L35.3301 23.6173V38.2918L43.6006 46.5623V23.5055C43.6006 9.11044 43.5559 0.459961 43.5 0.482314C43.3994 0.515843 30.759 11.301 29.239 12.6422C28.6131 13.201 23.852 17.2692 22.7344 18.208C22.1197 18.7333 22.0079 18.7891 21.8291 18.655C21.7173 18.5768 16.8892 14.4527 11.0998 9.47925C5.31049 4.51697 0.549372 0.459961 0.515843 0.459961C0.482314 0.459961 0.459961 10.8316 0.459961 23.5055Z" fill="white"/>
<path d="M6.27166 15.0674L6.28284 16.6098L7.14342 17.3474C7.61282 17.7497 10.284 20.0409 13.078 22.4326C15.8721 24.8244 18.7221 27.2496 19.3927 27.8308C20.0744 28.4119 20.9462 29.1608 21.3262 29.4849L22.0079 30.0884L24.3438 28.099C25.6179 27.0037 29.1384 23.9861 32.1449 21.4156C35.1625 18.8338 37.6548 16.6768 37.6995 16.6098C37.8336 16.4421 37.8113 13.5139 37.6771 13.5586C37.6213 13.5698 36.8054 14.2515 35.8666 15.0562C25.6961 23.785 22.1085 26.8361 22.0191 26.8361C21.9297 26.8361 19.728 24.9696 10.2281 16.8109C8.12693 15.0115 6.37225 13.5363 6.33872 13.5363C6.30519 13.5363 6.27166 14.2292 6.27166 15.0674Z" fill="white"/>
</svg>


export default function Header() {
  return (
    <div className='header-container'>
        <div>
            <div className="header-navigation">
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <div className='logo-txt'>
                        <p>MILANO DELIVERY </p>
                        <p>QUICK FASHION DELIVERY </p>
                    </div>
                </div>
                <button className='login-btn'>Log in</button>
            </div>
            <div className='header-txt'>
                <h1 className='header-title'>QUICK FASHION <br/> DELIVERY</h1>
                <h2 className='header-subtitle'>GODITI UN’ESPERIENZA DI SHOPPING SENZA STRESS CON LA NOSTRA <br/> EFFICIENTE CONSEGNA IN UN’ORA</h2>
            </div>
        </div>
    </div>
  )
}