import './App.css';
import Footer from './componentes/corpo/footer';
import Header from './componentes/corpo/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Produtos1 from './componentes/oleos/oleos essencias/p1';
import Produtos2 from './componentes/oleos/oleos vegetais/p2';
import Produtos3 from './componentes/oleos/sinergias/p3';
import Produtos4 from './componentes/oleos/cosmeticos naturais/p4';
import Produtos5 from './componentes/oleos/higiene pessoal/p5';
import Produtos6 from './componentes/oleos/aromatizadores/aromatizadores';
import Produtos7 from './componentes/oleos/acessorio/p7';
import Produtos8 from './componentes/oleos/consultor(a)/consultor';
import Produtos9 from './componentes/oleos/ofertas/ofertas';

import Meio from './componentes/corpo/meio';

function App() {
  return (
    <main>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Meio/>} />
            <Route path='/Meio' element={<Meio/>} />
            <Route path='/Produtos1' element={<Produtos1/>} />
            <Route path='/Produtos2' element={<Produtos2/>} />
            <Route path='/Produtos3' element={<Produtos3/>} />
            <Route path='/Produtos4' element={<Produtos4/>} />
            <Route path='/Produtos5' element={<Produtos5/>} />
            <Route path='/Produtos6' element={<Produtos6/>} />
            <Route path='/Produtos7' element={<Produtos7/>} />
            <Route path='/Produtos8' element={<Produtos8/>} />
            <Route path='/Produtos9' element={<Produtos9/>} />
          
          </Routes>

        <Footer/>
        </Router>
    </main>
  );
}

export default App;
