import React from 'react';
import Header from '../components/StartPageComponents/Header/Header';
import DeliverDescr from '../components/StartPageComponents/Delivery-descr/Delivery-descr';
import Categorie from '../components/StartPageComponents/Categorie/Categorie';
import Procedures from '../components/StartPageComponents/Procedures/Procedures';
import ChooseBoutique from '../components/StartPageComponents/СhooseBoutique/ChooseBoutique';
import Footer from '../components/Footer/Footer';


export default function StartPage() {
    return (
        <>
            <Header />
            <DeliverDescr />
            <Categorie />
            <Procedures />
            <ChooseBoutique />
            <Footer />
        </>
    );
}
    