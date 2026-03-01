import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Programas from './pages/Programas';
import Voluntariado from './pages/Voluntariado';
import Aliados from './pages/Aliados';
import Transparencia from './pages/Transparencia';
import Publicaciones from './pages/Publicaciones';
import Contacto from './pages/Contacto';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="programas" element={<Programas />} />
            <Route path="voluntariado" element={<Voluntariado />} />
            <Route path="aliados" element={<Aliados />} />
            <Route path="transparencia" element={<Transparencia />} />
            <Route path="publicaciones" element={<Publicaciones />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
