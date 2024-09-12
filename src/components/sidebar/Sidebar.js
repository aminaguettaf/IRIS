import React from 'react';
import './Sidebar.css';
import logoIris from '../../assets/logo-iris.png';
import { useTranslation } from 'react-i18next';

const Sidebar = ({showBar, setShowBar}) => {
    const {i18n, t} = useTranslation();
    const isRTL = i18n.dir() === 'rtl';

    return (
    <div className={`side-bar  ${isRTL && 'rtl'} ${showBar && 'active'}`}>
        <i onClick={()=>setShowBar(false)} className="fa-solid fa-xmark xmark"></i>
        <div>
            <h3>{t('about')}</h3>
            <img src={logoIris} alt=''/>
            <p>{t('paragraph')}</p>
        </div>
        <div>
            <h3>{t('liens')}</h3>
            <ul>
                <li><a href='/'>G4010</a></li>
                <li><a href='/'>G5010</a></li>
                <li><a href='/'>QLED Q7010</a></li>
            </ul>
        </div>
        <div>
            <h3>{t('lien4')}</h3>
            <div className='icons d-flex align-items-center gap-4'>
                <i className="fa-brands fa-facebook-f fa-fw"></i>
                <i className="fa-brands fa-twitter fa-fw"></i>
                <i className="fa-brands fa-youtube fa-fw"></i>
                <i className="fa-brands fa-linkedin fa-fw"></i>
            </div>
        </div>
    </div>
    )
}

export default Sidebar
