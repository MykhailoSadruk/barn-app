import React from "react";
import "./style.css";
import Borse from "../../../assets/Borse.svg";
import Collane from "../../../assets/Collane.svg";
import Scarpe from "../../../assets/Scarpe.svg";
import Vestiti from "../../../assets/Vestiti.svg";

export default function Categorie() {
  return (
    <div className="categorie-container">
      <h2 className="categorie-title">CATEGORIE</h2>
      <div className="categorie-box">
        <div className="parent">
          <div className="div1 ">
            <img className="categorie-img" src={Borse} alt="£" />
            <div className="categorie-txt">Borse</div>
          </div>
          <div className="div2 gray-bg ">
          <img className="categorie-img" src={Collane} alt="£" />
            <div className="categorie-txt">COLLANE </div></div>
          <div className="div3 mid-img ">
           <div className="categorie-mid-title"> Abbigliamento<br/>Femminile</div></div>
          <div className="div4 gray-bg">
          <img className="categorie-img" src={Scarpe} alt="£" />
            <div className="categorie-txt">SCARPE</div></div>
          <div className="div5 ">
          <img className="categorie-img" src={Vestiti} alt="£" />
            <div className="categorie-txt">Vestiti</div></div>
        </div>
      </div>
    </div>
  );
}
