import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const getCurrentHost = import.meta.env.MODE === 'development' ? 'http://localhost:3000' : 'https://dipesh-multi-lang-app.netlify.app/'

i18n
    .use(i18nBackend) // Need when load translation from backend (Public Folder)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
        // resources: {
        //     en: {
        //         translation: {
        //             title: "Multi-language app",
        //             label: "Select another language!",
        //             about: "About",
        //             home: "Home",
        //             user: "Hey i am : {{name}}",
        //             bio: "I am MERN Stack Engineer"
        //         },
        //     },
        //     es: {
        //         translation: {
        //             title: "Aplicación en varios idiomas",
        //             label: "Selecciona otro lenguaje!",
        //             about: "Sobre mí",
        //             home: "Inicio",
        //             user: "Hua me : {{name}}",
        //             bio: "Soy ingeniera de pila MERN"
        //         },
        //     },
        //     it: {
        //         translation: {
        //             title: "Applicazione multilingue",
        //             label: "Selezionare un'altra lingua ",
        //             about: "Su di me",
        //             home: "Casa",
        //             user: "Helua aim : {{name}}",
        //             bio: "Sono l'ingegnere dello stack MERN"
        //         },
        //     },
        // },
        backend: {
            loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
        },
    });

export default i18n;