import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t} = useTranslation();
    return (
    <div className='footer py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <h3 className='mb-5 position-relative'>{t('lien4')}</h3>
            <div className='d-flex  gap-2'>
              <h5>{t('email')}:</h5>
              <p>CONTACT@IRIS.DZ</p>
            </div>
            <div className='d-flex  gap-2'>
              <h5>{t('adress')}:</h5>
              <p>ZONE INDUSTRIELLE EXTENSION LOT N92, SECTION 20 ILOTS 138 SÉTIF / ALGER</p>
            </div>
          </div>
          <div className='col-lg-4 mt-5'>
            <div className='d-flex  gap-2 mt-4'>
              <h5 className='mb-5'>{t('tel')}</h5>
              <p>036 44 85 59/32</p>
            </div>
            <div className='d-flex gap-2'>
              <h5 className='mb-5'>{t('fax')}:</h5>
              <p>036 44 88 12</p>
            </div>
          </div>
          <div className='col-lg-4'>
            <h3 className='mb-5 position-relative'>{t('liens')}</h3>
            <ul>
              <li className='mb-2'><Link><i className="fa-solid fa-angle-right"></i> {t('lien1')}</Link></li>
              <li className='mb-2'><Link><i className="fa-solid fa-angle-right"></i> G4010</Link></li>
              <li className='mb-2'><Link><i className="fa-solid fa-angle-right"></i> G5010</Link></li>
              <li className='mb-2'><Link><i className="fa-solid fa-angle-right"></i> QLED Q7010</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
