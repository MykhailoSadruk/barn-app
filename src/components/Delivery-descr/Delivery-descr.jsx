import React from "react";
import "./style.css";
import bio from "../../icons/bio 1.svg"
import exchange from "../../icons/exchange 1.svg"
import evaluation from "../../icons/evaluation 1.svg"

export default function DeliverDescr() {
  return (
    <>
      <div className="container">
        <div className="delivery-txt">
          <h2 className="delivery-title">QUICK FASHION DELIVERY </h2>

          <div className="step">
            <div>
              <div className="circle">1</div>
            </div>
            <div>
              <div>
              <div className="title">EFFETTUA IL LOGIN</div>
              <div className="caption">Accedi al tuo account </div>
              </div>
            </div>
          </div>
          <div className="step">
            <div>
              <div className="circle">2</div>
            </div>
            <div>
              <div className="title">SCEGLI LA TUA BOUTIQUE</div>
              <div className="caption">
                Scegli tra una vasta gamma di abbigliamenti a Milano
              </div>
            </div>
          </div>
          <div className="step">
            <div>
              <div className="circle">3</div>
            </div>
            <div>
              <div className="title">CHIAMACI</div>
              <div className="caption">Chiamaci per effettuare l’ordine</div>
            </div>
          </div>
          <div className="step">
            <div>
              <div className="circle">4</div>
            </div>
            <div>
              <div className="title">IL TUO ORDINE E’ IN ARRIVO</div>
              <div className="caption">
                Pagamento al momento della consegna in contanti
              </div>
            </div>
          </div>
        </div>
        <div className="delivery-img"></div>
      </div>
      <div className="advantages-wrapper">
        <h2 className="advantages-title">sostenibilità</h2>
        <p className="advantages-descr">Il nostro obiettivo è promuovere la sostenibilità attraverso l'adozione di un modello operativo più ecologico per le consegne e i resi</p>
        <div className="advantages-boxes-wrapper">
          <div className="advantages-box">
            <img className="advantagesImg" src={evaluation} alt="evaluation-img" />
            <h3 className="box-title">Gestione ordini direttamente in negozio</h3>
            <p className="box-txt">Riduciamo le emissioni di almeno il 25% grazie alle consegne e ai resi nell'ultimo tratto del percorso</p>
          </div>
          <div className="advantages-box">
            <img className="advantagesImg" src={exchange} alt="exchange-img" />
            <h3 className="box-title">Minimizziamo i resi</h3>
            <p className="box-txt">Abbattere le emissioni durante le operazioni attraverso la diminuzione dei resi non necessari</p>
          </div>
          <div className="advantages-box">
            <img className="advantagesImg" src={bio} alt="bio-img" />
            <h3 className="box-title">Mobilità ecologica</h3>
            <p className="box-txt">Le consegne sostenibili avvengono grazie all'utilizzo di mezzi logistici eco friendly</p>
          </div>
        </div>
      </div>
    </>
  );
}
