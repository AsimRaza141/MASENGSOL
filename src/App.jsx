import React, {useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Clients from './Components/Clients';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import WhatsAppButton from './Components/WhatsAppButton';
import Photos from './Components/Photos';
import Videos from './Components/Videos';

const App = () => {
  const location = useLocation();
  const [navbarVisible, setNavbarVisible] = useState(true);
  const isPhotoOrVideoPage = location.pathname === '/photos' || location.pathname === '/videos';

  return (
    <div>
      <Navbar setNavbarVisible = {setNavbarVisible}/>
      <WhatsAppButton />
      <Routes>
        <Route path="/photos" element={<Photos />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>

      {/* Render other components only when not on Photos or Videos page */}
      {!isPhotoOrVideoPage && (
        <>
          <Hero navbarState={navbarVisible} />
          <About />
          <Services />
          <Clients />
          <Blog />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
