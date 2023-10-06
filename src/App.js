import './App.css';
import Header from './components/Header/Header';
import DeliverDescr from './components/Delivery-descr/Delivery-descr';
import Categorie from './components/Categorie/Categorie';
import Procedures from './components/Procedures/Procedures';
import ChooseBoutique from './components/СhooseBoutique/ChooseBoutique';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <DeliverDescr />
        <Categorie />
        <Procedures />
        <ChooseBoutique />
        <Footer />
    </div>
  );
}

export default App;
