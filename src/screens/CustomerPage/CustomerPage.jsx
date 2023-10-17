import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ContactBlock from "../../components/CustomerPageComponents/ContactBlock/ContactBlock";
import FashionShops from "../../components/CustomerPageComponents/FashionShops/FashionShops";

export default function CustomerPage() {
  const userEmail = sessionStorage.getItem("userEmail");

  return (
    <>
      <Header
        title="Scegli il tuo negozio"
        subtitle="Siamo orgogliosi di offrire un servizio di consegna di moda super rapido. Riceverai i tuoi capi di abbigliamento preferiti a casa tua entro un'ora dalla conferma dell'ordine. 
        L'agilità è la nostra priorità!"
        email={userEmail}
        headerStyleContainer="customer-header-container"
      />
      <ContactBlock />
      <FashionShops />
      <Footer />
    </>
  );
}
