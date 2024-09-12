import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';
import './i18n';
import i18n from './i18n';
import cookies from 'js-cookie';


function App() {
  const[showBar, setShowBar] = useState(false);
  // rtl or ltr  
  const updateDocumentDirection = () => {
    const lng = cookies.get('i18next') || 'fr';
    document.documentElement.dir = i18n.dir(lng);
  };
  updateDocumentDirection();
  i18n.on('languageChanged', updateDocumentDirection);
  
  const[loader, setLoader] = useState(true);
  useEffect(()=>{
    window.addEventListener('load', ()=>{
      setLoader(false);
    })
  },[])
  return (
    <div>
      {loader && <Loader/>}
      <Sidebar showBar={showBar} setShowBar={setShowBar}/>
      <BrowserRouter>
        <Navbar setShowBar={setShowBar} />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
