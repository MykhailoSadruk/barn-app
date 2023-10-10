import React from "react";
import "./style.css";
import fastIcon from "../../../assets/fast 1.svg";
import hangerIcon from "../../../assets/clothes-hanger 1.svg";
import phoneIcon from "../../../assets/phone-call 1.svg";
import enterIcon from "../../../assets/enter 1.svg";
import procedureShopImg from "../../../assets/procedureShopImg.png"
import procedureSubShopImg from "../../../assets/procedureSubImg.png"

export default function Procedures() {
  return (
    <div className="procedures-container">
      <h2 className="procedure-title">Effettua le seguenti procedure</h2>
      <div className="procedure-wrapper">
        <div className="procedure-box">
          <img src={enterIcon} alt="" className="procedure-img" />
          <h3 className="procedure-box-title">EFFETTUA IL LOGIN</h3>
          <div className="procedure-box-descr">Accedi al tuo account </div>
        </div>
        <div className="procedure-box">
          <img
            src={hangerIcon}
            alt="clothes-hanger"
            className="procedure-img"
          />
          <h3 className="procedure-box-title">SCEGLI LA TUA BOUTIQUE</h3>
          <div className="procedure-box-descr">
            Scegli tra una vasta gamma di abbigliamenti a Milano
          </div>
        </div>
        <div className="procedure-box">
          <img src={phoneIcon} alt="phone" className="procedure-img" />
          <h3 className="procedure-box-title">CHIAMACI </h3>
          <div className="procedure-box-descr">
            Chiamaci per effettuare l’ordine
          </div>
        </div>
        <div className="procedure-box">
          <img src={fastIcon} alt="delivery" className="procedure-img" />
          <h3 className="procedure-box-title">IL TUO ORDINE E’ IN ARRIVO</h3>
          <div className="procedure-box-descr">
            Pagamento al momento della consegna in contanti
          </div>
        </div>
      </div>
      <div className="procedures-descr-wrapper">
        <div className="first-box box">
          <div className="procedure-txt">
            Non aspettare mai più giorni/settimane per ottenere i tuoi abiti
            desiderati. Consegna rapida significa stile immediato. La moda che
            ami, quando la vuoi.
          </div>
          <img className="procedure-subImg" src={procedureSubShopImg} alt="£" />
        </div>
        <img className="second-box box" alt="£" src={procedureShopImg}/>
        <div className="third-box box">
          <div className="procedure-txt">
            Perché uscire quando la moda può venire da te? Scopri la perfetta
            combinazione di comodità e stile con il nostro servizio di consegna
            moda in un'ora a Milano. Fai shopping comodamente da casa e ricevi
            gli ultimi capi di moda direttamente alla tua porta.
          </div>
          <button className="procedure-btn"
           onClick={() => (window.location.href = '/login')}
           >Log In &rarr;</button>
        </div>
      </div>
    </div>
  );
}
