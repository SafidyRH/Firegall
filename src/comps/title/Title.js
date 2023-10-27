import React from 'react';
import './title.css'
import '../localization/Localization'
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';

const Title = () => {
  const {t} = useTranslation();

  return (
    <div className="title">
      
      <Navbar/>
      <h2>{t('Welcome_to_React')}</h2>
      <p>{t('Pictures_to_Store')}</p>
    </div>
  )
}

export default Title;