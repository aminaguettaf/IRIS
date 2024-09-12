import React, {useState } from 'react';
import './Navbar.css';
import logoNoir from '../../assets/logoNoir.png';
import logoBlanc from '../../assets/logoBlanc.png'
import { Link } from 'react-router-dom';
import algeriaFlag from '../../assets/algeriaFlag.png';
import usaFlag from '../../assets/usaFlag.png';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

const Navbar = ({setShowBar}) => {
  const {t} = useTranslation();
  const[stickyNav, setStickyNav] = useState(true);
  const[showMenu, setShowMenu] = useState(false);

    document.addEventListener('scroll', ()=>{
      if(window.innerWidth > 1029){
        setStickyNav(window.scrollY <= 20);
      }
      else{
        setStickyNav(false);
      }
    })
  
  return (
    <div className={`nav-bar ${stickyNav ? 'active': ''}`}>
      <div className='container d-flex align-items-center justify-content-between py-3'>
        {showMenu ? 
        <i onClick={()=>setShowMenu(false)} class="fa-solid fa-xmark xmark"></i>:
        <i onClick={()=>setShowMenu(true)} className="fa-solid fa-bars left-bars"></i>}
        {stickyNav ? 
        <img className='logo noir' src={logoNoir} alt=''/>:
        <img className='logo blanc' src={logoBlanc} alt=''/>}
        <ul className={`d-flex align-items-center gap-4 ${showMenu && "active"}`}>
          <li><Link>{t('lien1')}</Link></li>
          <li><Link>g4010</Link></li>
          <li><Link>g5010</Link></li>
          <li><Link>qled q7010</Link></li>
          <li><Link>{t('lien2')}</Link></li>
          <li><Link>{t('lien3')}</Link></li>
          <li><Link>{t('lien4')}</Link></li>
          <li onClick={()=>{i18n.changeLanguage('ar')}}><img src={algeriaFlag} alt=''/></li>
          <li onClick={()=>{i18n.changeLanguage('fr')}}><img src={usaFlag} alt=''/></li>
        </ul>
        <i onClick={()=>setShowBar(true)} className="fa-solid fa-bars bars"></i>
      </div>
    </div>
  )
}

export default Navbar
