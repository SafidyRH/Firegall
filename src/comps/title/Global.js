import React from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './global.css'



const languages = [
    {
        code : 'fr',
        name : 'Français',
        country_code : 'fr'
    },
    {
        code : 'en',
        name : 'English',
        country_code : 'gb'
    },
]


const Global = () => {

  const { t } = useTranslation();

  return ( 
    <div className="dropdown">
        <button className="btn btn-#46A094 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {t('code')}
        </button>
        <ul className="dropdown-menu" aria-labelledby='dropdownMenuButton1'>
          {languages.map(({ code, name, country_code}) => (

              <li><button className="dropdown-item" onClick={() => i18next.changeLanguage(code) }>
                  <span className={`flag-icon fla-icon-${country_code} mx-2`}>
                
                  </span>
                  {name}
                </button>
              </li>
          ) )}
          
        </ul>
    </div>
         
  )
}

export default Global