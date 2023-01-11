import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getCurrentLang } from './lib/getCurrentLang';

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: getCurrentLang(),
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // language resources
        resources: {
            en: {
                translation: {
                    title: 'Multi-language app',
                    label: "Select another language!",
                    about: 'About',
                    home: 'Home'
                }
            },
            es: {
                translation: {
                    title: 'Aplicación en varios idiomas',
                    label: "Selecciona otro lenguaje!",
                    about: 'Sobre mí',
                    home: 'Inicio'
                }
            },
            it: {
                translation: {
                    title: 'Applicazione multilingue',
                    label: "Selezionare un'altra lingua ",
                    about: 'Su di me',
                    home: 'Casa'
                }
            },
        }
    });

export default i18n;
