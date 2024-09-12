import React, {useEffect, useState} from 'react';
import './Gammes.css';
import g4010 from '../../assets/G4010.jpg';
import g5010 from '../../assets/G5010.jpg';
import q7010 from '../../assets/Q7010.jpg';
import {Link} from 'react-router-dom';
import "../mainTitle/MainTitle.css";
import { useTranslation } from 'react-i18next';

const Gammes = () => {
    const [rotate, setRotate] = useState(false);
    const[titleEffect, setTitleEffect] = useState(false);
    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            if(window.scrollY > 400){
                setRotate(true);
            }
            else{
                setRotate(false);
            }
        })
        document.addEventListener('scroll', ()=>{
            if(window.scrollY > 250){
                setTitleEffect(true);
            }
            else{
                setTitleEffect(false);
            }
        })
    },[])

    const {t} = useTranslation();
    return (
    <div className='gammes py-5'>
        <div className='container'>
            <h2 className={`main-title ${titleEffect && 'active'}`}>{t('titre1')}</h2>
            <div className='row gap-4'>
                <div className={`box col-lg-4 one ${rotate && 'rotate'}`}>
                    <div className='img position-relative'>
                        <img src={g5010} alt=''/>
                        <div className='text'>
                            <p>IRIS TELEVISION G4010</p>
                            <Link>En savoir plus</Link>
                        </div>
                    </div>
                    <p className='title'>IRIS TELEVISION G4010</p>
                </div>
                <div className={`box col-lg-4 two ${rotate && 'rotate'}`}>
                    <div className='img position-relative'>
                        <img src={g4010} alt=''/>
                        <div className='text'>
                            <p>IRIS TELEVISION G5010</p>
                            <Link>En savoir plus</Link>
                        </div>
                    </div>
                    <p className='title'>IRIS TELEVISION G5010</p>
                </div>
                <div className={`box col-lg-4 three ${rotate && 'rotate'}`}>
                    <div className='img position-relative'>
                        <img src={q7010} alt=''/>
                        <div className='text'>
                            <p>IRIS TELEVISION G7010</p>
                            <Link>En savoir plus</Link>
                        </div>
                    </div>
                    <p className='title'>IRIS TELEVISION QLED G7010</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Gammes
