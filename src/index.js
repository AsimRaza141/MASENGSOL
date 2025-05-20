import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Components/Navbar.css';
import './Components/Hero.css';
import './Components/About.css';
import './Components/Services.css';
import './Components/Clients.css';
import './Components/WhatsAppButton.css';
import './Components/Contact.css';
import './Components/Photos.css';
import './Components/Videos.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
