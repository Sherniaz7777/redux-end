import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import KG from "./kg/kg.json"
import EN from "./en/en.json"




const resources={
    en: {
        translation: EN,
    }, 
    kg: {
        translation: KG,
    }
}

await i18next.use(initReactI18next).init({
    resources,
    lng:'en',
    fallbackLng:'kg',

})

export default i18next