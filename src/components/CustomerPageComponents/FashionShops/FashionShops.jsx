import React from "react";
import "./style.css";
import bossImg from "../../../assets/bossImg.png";
import baldininiImg from "../../../assets/BaldininiImg.png";
import shopImg1 from "../../../assets/shop-img/shopImg1.png";
import shopImg2 from "../../../assets/shop-img/shopImg2.png";
import shopImg3 from "../../../assets/shop-img/shopImg3.png";
import shopImg4 from "../../../assets/shop-img/shopImg4.png";
import shopImg5 from "../../../assets/shop-img/shopImg5.png";
import shopImg6 from "../../../assets/shop-img/shopImg6.png";
import shopImg7 from "../../../assets/shop-img/shopImg7.png";
import shopImg8 from "../../../assets/shop-img/shopImg8.png";

export default function FashionShops() {
  const cardData = [
    {
      cardTitle: "GUESS",
      cardLink: "#",
      linkTxt: "Shop now →",
      cardImg: shopImg1,
    },
    {
      cardTitle: "HUGO",
      cardLink: "#",
      linkTxt: "Shop now →",
      cardImg: shopImg2,
    },
    {
      cardTitle: "LEVI'S",
      cardLink: "#",
      linkTxt: "Shop now →",
      cardImg: shopImg3,
    },
    {
      cardTitle: "GUESS",
      cardLink: "#",
      linkTxt: "Shop now →",
      cardImg: shopImg4,
    },
    {
      cardTitle: "HUGO",
      cardLink: "#",
      linkTxt: "Shop now →",
      cardImg: shopImg5,
    },
    {
      cardTitle: "LEVI'S",
      cardLink: "#",
      linkTxt: "Shop now →",
      cardImg: shopImg6,
    },
  ];

  return (
    <div className="fashion-shops-container">
      <h2 className="advantages-title">FASHION SHOPS</h2>
      <p className="advantages-descr">
        Il nostro obiettivo è promuovere la sostenibilità attraverso l'adozione
        di un modello operativo più ecologico per le consegne e i resi
      </p>

      <div className="fashion-item-wrapper">
        <div className="fashion-item-box">
          <img src={baldininiImg} alt="" className="fashion-item-img " />
          <div className="fashion-item-txt fashion-item-txt-left">
            <h3 className="fashion-title">BOSS</h3>
            <a className="shop-link" href="#">
              Shop now &rarr;
            </a>
          </div>
        </div>
        <div className="fashion-item-box">
          <div className="fashion-item-txt-right ">
            <h3 className="fashion-title">
              <span className="txt-white">BAL</span>DININI
            </h3>
            <a className="shop-link" href="#">
              Shop now &rarr;
            </a>
          </div>
          <img
            src={bossImg}
            alt=""
            className="fashion-item-img fashion-item-img-right"
          />
        </div>
      </div>
        <div className="fashion-shops-wrapper">
          {cardData.map((card, index) => (
            <div className="card-shop-wrapper" key={index}>
              <div className="card-shop-logo">
                <img className="card-shop-bg" src={card.cardImg} alt="#" />
                <div className="card-title">{card.cardTitle}</div>
              </div>
              <a className="shop-link card-link" href={card.cardLink}>
                {card.linkTxt}
              </a>
            </div>
          ))}
        </div>
        <div className="bottom-shops-wrapper">
          <div className="card-shop-wrapper">
            <div className="card-shop-logo">
              <img className="card-shop-bg footer-card-shop-bg" src={shopImg7} alt="#" />
              <div className="card-title">HUGO</div>
            </div>
            <a className="shop-link card-link" href="#">
              Shop now &rarr;
            </a>
          </div>
          <div className="card-shop-wrapper">
            <div className="card-shop-logo">
              <img className="card-shop-bg footer-card-shop-bg" src={shopImg8} alt="#" />
              <div className="card-title">LEVI'S</div>
            </div>
            <a className="shop-link card-link" href="#">
              Shop now &rarr;
            </a>
          </div>
        </div>
    </div>
  );
}
