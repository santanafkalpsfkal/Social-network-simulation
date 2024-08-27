import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importa Provider
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // Importa el Footer
import 'antd/dist/reset.css'; // Importa los estilos de Ant Design
import NewsFeed from './pages/NewsFeed/NewsFeed'; // Importa NewsFee
import './pages/NewsFeed/notificationStyles.css';
import './App.css'; // Asegúrate de que el CSS está importado
import store from './store/store'; // Importa el store de Redux

const App = () => {
  return (
    <Provider store={store}> {/* Envuelve la aplicación con Provider */}
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            {/* Puedes agregar rutas adicionales si es necesario */}
          </Routes>
        </main>
        <Footer /> {/* Agrega el Footer al final */}
      </Router>
    </Provider>
  );
};

export default App;
