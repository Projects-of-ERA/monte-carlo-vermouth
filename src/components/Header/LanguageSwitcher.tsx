// import { useEffect, useId, useRef, useState } from 'react';
// import './LanguageSwitcher.css';

// type Language = 'en' | 'fr' | 'es';

// const languages: { code: Language; label: string; flag: string }[] = [
//   { code: 'en', label: 'English', flag: '/images/header/languages/en.svg' },
//   { code: 'fr', label: 'Français', flag: '/images/header/languages/fr.svg' },
//   { code: 'es', label: 'Español', flag: '/images/header/languages/es.svg' },
// ];

// const LanguageSwitcher = () => {
//   const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
//   const [isOpen, setIsOpen] = useState(false);

//   const switcherRef = useRef<HTMLDivElement>(null);

//   const selectedLanguage = languages.find((language) => language.code === currentLanguage)!;

//   const dropdownId = useId();

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     document.addEventListener('keydown', handleEscape);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.removeEventListener('keydown', handleEscape);
//     };
//   }, []);

//   const handleLanguageChange = (language: Language) => {
//     setCurrentLanguage(language);
//     setIsOpen(false);
//   };

//   return (
//     <div className="language-switcher" ref={switcherRef}>
//       <div
//         id={dropdownId}
//         className={`language-switcher-dropdown ${isOpen ? 'is-open' : ''}`}
//         inert={!isOpen}>
//         {languages
//           .filter((language) => language.code !== currentLanguage)
//           .map((language) => (
//             <button
//               key={language.code}
//               type="button"
//               className="language-switcher-option"
//               aria-label={`Switch to ${language.label}`}
//               onClick={() => handleLanguageChange(language.code)}>
//               <img src={language.flag} alt="" className="language-switcher-flag" />
//             </button>
//           ))}
//       </div>

//       <button
//         type="button"
//         className="language-switcher-button"
//         aria-label={`Selected language: ${selectedLanguage.label}. Change language`}
//         aria-expanded={isOpen}
//         aria-controls={dropdownId}
//         onClick={() => setIsOpen((prev) => !prev)}>
//         <img src={selectedLanguage.flag} alt="" className="language-switcher-flag" />
//       </button>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import type { Language } from '../../i18n/i18n';
import './LanguageSwitcher.css';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '/images/header/languages/en.svg' },
  { code: 'fr', label: 'Français', flag: '/images/header/languages/fr.svg' },
  { code: 'es', label: 'Español', flag: '/images/header/languages/es.svg' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const switcherRef = useRef<HTMLDivElement>(null);
  const dropdownId = useId();

  const currentLanguage = (i18n.resolvedLanguage || 'en') as Language;

  const selectedLanguage = languages.find((language) => language.code === currentLanguage)!;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLanguageChange = (language: Language) => {
    const currentPath = location.pathname;

    const pathWithoutLanguage = currentPath.replace(/^\/(fr|es)(?=\/|$)/, '') || '/';

    const newPath =
      language === 'en'
        ? pathWithoutLanguage
        : `/${language}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`;

    void i18n.changeLanguage(language);

    setIsOpen(false);

    navigate(newPath + location.search + location.hash);
  };

  return (
    <div className="language-switcher" ref={switcherRef}>
      <div
        id={dropdownId}
        className={`language-switcher-dropdown ${isOpen ? 'is-open' : ''}`}
        inert={!isOpen}>
        {languages
          .filter((language) => language.code !== currentLanguage)
          .map((language) => (
            <button
              key={language.code}
              type="button"
              className="language-switcher-option"
              aria-label={`Switch to ${language.label}`}
              onClick={() => handleLanguageChange(language.code)}>
              <img src={language.flag} alt="" className="language-switcher-flag" />
            </button>
          ))}
      </div>

      <button
        type="button"
        className="language-switcher-button"
        aria-label={`Selected language: ${selectedLanguage.label}. Change language`}
        aria-expanded={isOpen}
        aria-controls={dropdownId}
        onClick={() => setIsOpen((prev) => !prev)}>
        <img src={selectedLanguage.flag} alt="" className="language-switcher-flag" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
