import React from "react";
import Header from "../../components/Header/Header";
import DeliverDescr from "../../components/StartPageComponents/Delivery-descr/Delivery-descr";
import Categorie from "../../components/StartPageComponents/Categorie/Categorie";
import Procedures from "../../components/StartPageComponents/Procedures/Procedures";
import ChooseBoutique from "../../components/StartPageComponents/ChooseBoutique/ChooseBoutique";
import Footer from "../../components/Footer/Footer";

export default function StartPage() {
  return (
    <>
      <Header
        title="QUICK FASHION DELIVERY"
        subtitle="Goditi un’esperienza di shopping senza stress con la nostra efficiente consegna in un’ora"
        headerStyleContainer="landing-header-container"

      />
      <DeliverDescr />
      <Categorie />
      <Procedures />
      <ChooseBoutique />
      <Footer />
    </>
  );
}
