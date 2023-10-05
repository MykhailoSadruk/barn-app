import React from "react";
import "./style.css";

export default function DeliverDescr() {
  return (
    <div className="container">
      <div className="delivery-txt">
        <h2 className="delivery-title">QUICK FASHION DELIVERY </h2>

        <div class="step">
          <div>
            <div class="circle">
              1
            </div>
          </div>
          <div>
            <div class="title">EFFETTUA IL LOGIN</div>
            <div class="caption">ACCEDI AL TUO ACCOUNT </div>
          </div>
        </div>
        <div class="step">
          <div>
            <div class="circle">2</div>
          </div>
          <div>
            <div class="title">SCEGLI LA TUA BOUTIQUE</div>
            <div class="caption">SCEGLI TRA UNA VASTA GAMMA DI ABBIGLIAMENTI A MILANO</div>
          </div>
        </div>
        <div class="step">
          <div>
            <div class="circle">3</div>
          </div>
          <div>
            <div class="title">CHIAMACI</div>
            <div class="caption">CHIAMACI PER EFFETTUARE L’ORDINE</div>
          </div>
        </div>
        <div class="step">
          <div>
            <div class="circle">4</div>
          </div>
          <div>
            <div class="title">IL TUO ORDINE E’ IN ARRIVO</div>
            <div className="caption">Pagamento al momento della consegna in contanti</div>
          </div>
        </div>
      </div>
      <div className="delivery-img"></div>
    </div>
  );
}
