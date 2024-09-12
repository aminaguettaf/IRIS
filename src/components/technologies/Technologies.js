import React, {useEffect, useState} from 'react';
import '../../components/mainTitle/MainTitle.css';
import './Technologies.css';
import logoPart1 from '../../assets/logoPartenaire2.png';
import logoPart2 from '../../assets/logoPartenaire3.png';
import logoPart3 from '../../assets/logoPartenaire4.png';
import logoPart4 from '../../assets/logoPartenaire5.png';
import logoPart5 from '../../assets/logoPartenaire6.png';
import { useTranslation } from 'react-i18next';

const Technologies = () => {
    const[titleEffect, setTitleEffect] = useState(false);
    const[titleShow, setTitleShow] = useState(false);

    useEffect(()=>{
        document.addEventListener('scroll', ()=>{
            if(window.scrollY > 1300){
                setTitleEffect(true);
                setTitleShow(true);
            }
            else{
                setTitleEffect(false);
                setTitleShow(false);
            }
        })
    },[])
    
    const {t} = useTranslation();
    return (
    <div className='technologies py-5'>
        <div className='container'>
            <p className={`iris ${titleShow && 'show'}`}>iris</p>
            <h2 className={`main-title ${titleEffect && 'active'}`}>{t('titre2')}</h2>
            <div className='d-flex align-items-center gap-5'>
                <img src={logoPart1} alt=''/>
                <img src={logoPart2} alt=''/>
                <img src={logoPart3} alt=''/>
                <img src={logoPart4} alt=''/>
                <img src={logoPart5} alt=''/>
            </div>
        </div>
    </div>
)
}

export default Technologies
